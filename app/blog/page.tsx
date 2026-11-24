import type { Metadata } from "next";
import { getAllPosts, type FormattedPost } from "@/lib/wordpress";
import BlogListClient from "./BlogListClient";
import fallbackBlogPosts from "../data/blog.json";

export const revalidate = 60; // Revalidate at most every 60 seconds

export const metadata: Metadata = {
  title: "Roofing Insights & Home Care Guides | McCannical Roofing Blog",
  description:
    "Expert advice, storm season tips, hail damage help, and guides straight from Austin & Cedar Park’s trusted roofing specialists.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Roofing Insights & Home Care Guides | McCannical Roofing Blog",
    description:
      "Expert advice, storm season tips, hail damage help, and guides straight from Austin & Cedar Park’s trusted roofing specialists.",
    url: "https://www.mccannicalroofing.com/blog",
    siteName: "McCannical Roofing",
    type: "website",
  },
};

export default async function BlogPage() {
  let posts: FormattedPost[] = [];

  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error("Failed to load WordPress posts:", error);
  }

  // Fallback to local blog.json if WordPress API returned 0 posts
  if (!posts || posts.length === 0) {
    posts = fallbackBlogPosts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt || "",
      content: "",
      date: p.date,
      publishDate: p.publishDate || p.date,
      modifiedDate: p.date,
      readTime: p.readTime || "5 min read",
      featuredImage: p.featuredImage || "/blog1.jpeg",
      featuredImageAlt: p.title,
      category: p.category || "Roofing",
      categories: p.categories || [p.category || "Roofing"],
      tags: p.tags || [],
      author: {
        name: "McCannical Roofing Team",
      },
    }));
  }

  return <BlogListClient posts={posts} />;
}
