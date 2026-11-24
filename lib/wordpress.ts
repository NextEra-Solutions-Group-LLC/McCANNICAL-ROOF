export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: { rendered: string };
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
        sizes?: Record<string, { source_url: string; width: number; height: number }>;
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: "category" | "post_tag" | string;
      }>
    >;
  };
}

export interface FormattedPost {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  publishDate: string;
  modifiedDate: string;
  readTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  categories: string[];
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
}

const DEFAULT_WP_API_URL = "https://blog.mccannicalroofing.com/wp-json/wp/v2";

export function getWpApiUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!envUrl) return DEFAULT_WP_API_URL;
  return envUrl.replace(/\/+$/, "");
}

/**
 * Decode common HTML entities from WordPress titles/content
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return "";
  return text
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, dec) => {
      try {
        return String.fromCharCode(Number(dec));
      } catch {
        return "";
      }
    });
}

/**
 * Strip HTML tags to get plain text
 */
export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();
}

/**
 * Calculate reading time based on word count
 */
export function calculateReadingTime(content: string): string {
  if (!content) return "1 min read";
  const clean = stripHtml(content);
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Format ISO date string into human readable date
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

/**
 * Convert a WordPress REST API post to our standard FormattedPost
 */
export function formatWPPost(post: WPPost): FormattedPost {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImage = media?.source_url || "/blog1.jpeg";
  const featuredImageAlt =
    media?.alt_text || decodeHtmlEntities(post.title?.rendered || "Blog Post");

  const terms = post._embedded?.["wp:term"] || [];
  const catTerms = terms[0] || [];
  const tagTerms = terms[1] || [];

  const categories = catTerms
    .map((t) => decodeHtmlEntities(t.name))
    .filter(Boolean);
  const category = categories[0] || "Roofing";

  const tags = tagTerms
    .map((t) => decodeHtmlEntities(t.name))
    .filter(Boolean);

  const authorObj = post._embedded?.author?.[0];
  let authorName = authorObj?.name || "McCannical Roofing";
  if (
    authorName.toLowerCase().includes("mcc@nnical") ||
    authorName.toLowerCase().includes("mccnnical")
  ) {
    authorName = "McCannical Roofing Team";
  }
  const authorAvatar =
    authorObj?.avatar_urls?.["96"] ||
    authorObj?.avatar_urls?.["48"] ||
    authorObj?.avatar_urls?.["24"];

  const rawTitle = post.title?.rendered || "";
  const title = decodeHtmlEntities(rawTitle);

  const rawExcerpt = post.excerpt?.rendered || "";
  const excerpt = decodeHtmlEntities(stripHtml(rawExcerpt));

  const content = post.content?.rendered || "";

  return {
    id: post.id,
    slug: post.slug,
    title,
    excerpt,
    content,
    date: post.date,
    publishDate: formatDate(post.date),
    modifiedDate: post.modified || post.date,
    readTime: calculateReadingTime(content),
    featuredImage,
    featuredImageAlt,
    category,
    categories: categories.length > 0 ? categories : [category],
    tags,
    author: {
      name: authorName,
      avatar: authorAvatar,
    },
  };
}

/**
 * Fetch all posts from WordPress API with _embed
 */
export async function getAllPosts(): Promise<FormattedPost[]> {
  const baseUrl = getWpApiUrl();
  try {
    const res = await fetch(`${baseUrl}/posts?_embed=1&per_page=100`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch posts from WP: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: WPPost[] = await res.json();
    return data.map(formatWPPost);
  } catch (error) {
    console.error("Error fetching WP posts:", error);
    return [];
  }
}

/**
 * Fetch a single post by slug with _embed
 */
export async function getPostBySlug(slug: string): Promise<FormattedPost | null> {
  const baseUrl = getWpApiUrl();
  try {
    const res = await fetch(
      `${baseUrl}/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data: WPPost[] = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return formatWPPost(data[0]);
  } catch (error) {
    console.error(`Error fetching WP post by slug (${slug}):`, error);
    return null;
  }
}

/**
 * Fetch all published post slugs
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const baseUrl = getWpApiUrl();
  try {
    const res = await fetch(`${baseUrl}/posts?per_page=100&_fields=slug`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];

    const data: Array<{ slug: string }> = await res.json();
    return data.map((p) => p.slug);
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}
