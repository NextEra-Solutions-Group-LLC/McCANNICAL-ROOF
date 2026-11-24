import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  ShieldCheck,
  PhoneCall,
  User,
  FolderOpen,
} from "lucide-react";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | McCannical Roofing",
    };
  }

  return {
    title: `${post.title} | McCannical Roofing Blog`,
    description:
      post.excerpt || `Read ${post.title} on McCannical Roofing & Exteriors blog.`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.mccannicalroofing.com/blog/${post.slug}`,
      siteName: "McCannical Roofing",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      authors: [post.author?.name || "McCannical Roofing Team"],
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch recent posts for "More Articles" section
  let relatedPosts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    const all = await getAllPosts();
    relatedPosts = all.filter((p) => p.slug !== post.slug).slice(0, 3);
  } catch {
    relatedPosts = [];
  }

  return (
    <article className="min-h-screen bg-[#101317] text-gray-200 pt-36 sm:pt-44 lg:pt-48 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#65C142]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#65C142]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#65C142] hover:text-[#7fd45f] transition-colors font-semibold group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all blogs
          </Link>
          <div className="text-gray-400 text-xs hidden sm:flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-[200px]">
              {post.category}
            </span>
          </div>
        </div>

        {/* Categories & Metadata Header */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#65C142]/20 border border-[#65C142]/40 text-[#65C142]"
            >
              <FolderOpen size={12} />
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Meta Bar: Author, Publish Date, Reading Time */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 py-4 border-y border-white/10 mb-10">
          <div className="flex items-center gap-2 text-white font-medium">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full border border-white/20"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-[#65C142]/20 border border-[#65C142]/40 flex items-center justify-center text-[#65C142]">
                <User size={14} />
              </div>
            )}
            <span>{post.author.name}</span>
          </div>

          <span className="flex items-center gap-1.5">
            <Calendar size={15} className="text-[#65C142]" />
            {post.publishDate}
          </span>

          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-[#65C142]" />
              {post.readTime}
            </span>
          )}
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-gray-900">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Main Blog Post Body Content (Rendered WordPress HTML) */}
        <div
          className="blog-content mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 border-t border-white/10 mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              <Tag size={14} className="text-[#65C142]" />
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 border border-white/10 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65C142] hover:text-[#7fd45f] transition-colors"
          >
            <ArrowLeft size={16} /> Return to All Blogs
          </Link>
          <a
            href="tel:5122383000"
            className="text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            Questions? Call <span className="text-[#65C142]">(512) 238-3000</span>
          </a>
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#172118] via-[#141b22] to-[#10141a] border border-[#65C142]/30 p-8 sm:p-10 shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#65C142]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65C142]/20 border border-[#65C142]/40 text-[#65C142] text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck size={14} /> Quality Over Everything
              </div>
              <h2 className="text-2xl font-black text-white">
                Suspect Storm or Hail Damage on Your Roof?
              </h2>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Schedule a complimentary 4K drone roof inspection with McCannical
                Roofing &amp; Exteriors in Greater Austin.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:5122383000"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 transition-all"
              >
                <PhoneCall size={16} className="text-[#65C142]" /> (512) 238-3000
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65C142] to-[#55a735] hover:from-[#58a838] hover:to-[#468f2c] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(101,193,66,0.4)] transition-all hover:-translate-y-0.5"
              >
                Free Inspection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* More Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white tracking-tight">
                More Articles &amp; Guides
              </h2>
              <Link
                href="/blog"
                className="text-xs sm:text-sm font-bold text-[#65C142] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-[#161b22] hover:bg-[#1a212a] border border-white/10 hover:border-[#65C142]/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={related.featuredImage}
                      alt={related.featuredImageAlt || related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                      <Calendar size={12} className="text-[#65C142]" />
                      {related.publishDate}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#65C142] transition-colors line-clamp-2 mb-3">
                      {related.title}
                    </h3>
                    <div className="mt-auto text-xs font-bold text-[#65C142] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
