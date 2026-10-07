"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Sparkles, 
  BookOpen, 
  Tag, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall 
} from "lucide-react";
import blogPosts from "../data/blog.json";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract all unique categories
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    blogPosts.forEach((post) => {
      if (post.category) cats.add(post.category);
      if (Array.isArray(post.categories)) {
        post.categories.forEach((c) => cats.add(c));
      }
    });
    return ["All", ...Array.from(cats)];
  }, []);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory ||
        (Array.isArray(post.categories) && post.categories.includes(selectedCategory));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        (Array.isArray(post.tags) && post.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-[#101317] text-white font-['Segoe_UI',system-ui,-apple-system,sans-serif] pt-36 sm:pt-44 lg:pt-48 pb-24 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#65C142]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#65C142]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65C142]/15 border border-[#65C142]/40 text-[#65C142] text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
              <Sparkles size={14} /> McCannical Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Roofing Insights &amp; <br className="hidden sm:block" />
              <span className="text-[#65C142]">Home Care Guides</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mt-5 leading-relaxed">
              Expert advice, storm season preparation tips, and honest guides straight from Austin &amp; Cedar Park’s trusted roofing specialists.
            </p>
          </motion.div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#65C142] text-white shadow-[0_0_20px_rgba(101,193,66,0.4)]"
                      : "bg-[#181d24] text-gray-300 hover:text-white hover:bg-[#202731] border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search articles, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181d24] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#65C142] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-24 bg-[#14181f] rounded-3xl border border-white/5 p-8">
            <BookOpen size={48} className="mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We couldn&apos;t find any posts matching your criteria. Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-[#65C142]/20 text-[#65C142] hover:bg-[#65C142] hover:text-white transition-all text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => {
                // Main category badge
                const primaryCategory = post.category || (post.categories && post.categories[0]) || "Roofing";

                return (
                  <motion.article
                    key={post.id || post.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex flex-col bg-[#161b22] hover:bg-[#1a212a] border border-white/10 hover:border-[#65C142]/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                  >
                    {/* Featured Image Container */}
                    <Link
                      href={`/${post.slug}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-900"
                    >
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-black/20" />

                      {/* Category Badge overlay */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#65C142] text-white shadow-lg backdrop-blur-md">
                          {primaryCategory}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow p-6 sm:p-7">
                      {/* Meta: Publish Date & Read Time */}
                      <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#65C142]" />
                          {post.publishDate}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-[#65C142]" />
                            {post.readTime}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-black text-white group-hover:text-[#65C142] transition-colors leading-snug mb-3">
                        <Link href={`/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Categories / Tags pills */}
                      {Array.isArray(post.categories) && post.categories.length > 1 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {post.categories.slice(0, 3).map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
                            >
                              <Tag size={10} className="text-[#65C142]" />
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Card Footer: Read CTA */}
                      <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-end">
                        <Link
                          href={`/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#65C142] group-hover:translate-x-1 transition-transform"
                        >
                          Read Article <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#172118] via-[#141b22] to-[#10141a] border border-[#65C142]/30 p-8 sm:p-12 shadow-2xl"
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#65C142]/20 border border-[#65C142]/40 text-[#65C142] text-xs font-black uppercase tracking-wider mb-4">
                <ShieldCheck size={14} /> Quality Over Everything
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Suspect Storm or Hail Damage on Your Roof?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
                Schedule a complimentary 4K drone roof inspection with McCannical Roofing &amp; Exteriors. We provide honest photographic assessments and help navigate insurance claims without hassle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="tel:5122383000"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 transition-all"
              >
                <PhoneCall size={16} className="text-[#65C142]" /> (512) 238-3000
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#65C142] to-[#55a735] hover:from-[#58a838] hover:to-[#468f2c] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(101,193,66,0.4)] transition-all hover:-translate-y-0.5"
              >
                Free Drone Inspection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
