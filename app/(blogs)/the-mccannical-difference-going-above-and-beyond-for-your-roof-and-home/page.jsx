import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "the-mccannical-difference-going-above-and-beyond-for-your-roof-and-home"
) || {
  title:
    "The McCannical Difference: Going Above and Beyond for Your Roof and Home",
  category: "Upgrades",
  categories: ["Upgrades", "Quality", "Trust-Building"],
  publishDate: "17 November 2025",
  featuredImage: "/blog17.jpg",
  tags: [
    "Austin",
    "Free Upgrades",
    "Owens Corning",
    "Roof Replacement",
    "Roofing Contractor",
    "Warranty",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Discover The McCannical Difference: free shingle and ventilation upgrades, synthetic felt, ice & water shield, and our lifetime transferable workmanship warranty.",
  alternates: {
    canonical:
      "/the-mccannical-difference-going-above-and-beyond-for-your-roof-and-home",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "The McCannical Difference: free upgrades and lifetime warranties for Central Texas homeowners.",
    url: "https://www.mccannicalroofing.com/the-mccannical-difference-going-above-and-beyond-for-your-roof-and-home",
    siteName: "McCannical Roofing",
    images: [
      {
        url: currentBlog.featuredImage,
        width: 1200,
        height: 630,
        alt: currentBlog.title,
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function McCannicalDifferenceBlogPage() {
  return (
    <article className="min-h-screen bg-[#101317] text-gray-200 pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="mb-6 text-sm">
          <Link href="/blog" className="text-[#65C142] hover:underline">
            &larr; Back to all blogs
          </Link>
        </p>

        <p className="text-xs uppercase tracking-wider text-[#65C142] font-semibold mb-2">
          {currentBlog.categories.join(", ")} &bull; <span>{currentBlog.publishDate}</span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          {currentBlog.title}
        </h1>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-white/10">
          <Image
            src={currentBlog.featuredImage}
            alt={currentBlog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            At McCannical Roofing &amp; Exteriors, you’re not just getting a repair for what your insurance covers—you’re getting The McCannical Difference, a promise to go well above and beyond to ensure your roof is built to last. Here’s what makes us different and why homeowners trust us to deliver exceptional results.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Free Upgrades That Add Value
          </h2>

          <p>
            When it comes to replacing or repairing your roof, we believe in doing it right the first time. That’s why we include free upgrades as standard—no hidden fees, no upselling. Unlike many contractors who stick to the bare-minimum covered by insurance, we enhance your roof with premium materials and features, including:
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Shingle Upgrades
          </h3>
          <p>
            We use top-tier shingles from industry leader Owens Corning, known for their durability, weather resistance, and stunning curb appeal. These upgraded shingles provide better protection against Austin&apos;s harsh storms and intense heat.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Ventilation Upgrades
          </h3>
          <p>
            Proper attic ventilation is critical to extending your roof&apos;s life and keeping your home energy-efficient. We assess and upgrade ventilation systems to prevent heat buildup, reduce moisture, and protect against costly issues like mold.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Premium Accessories
          </h3>
          <p>
            We install synthetic felt and ice &amp; water shield as standard, offering superior protection against leaks and storm damage compared to traditional materials. These upgrades ensure your roof stands strong, no matter what Texas weather throws its way.
          </p>

          <p>
            These enhancements aren’t just about meeting insurance requirements—they’re about giving you peace of mind and a roof that performs for decades.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Top-Tier Products, Backed by Our Lifetime Warranty
          </h2>

          <p>
            At McCannical, quality is non-negotiable. We exclusively use Owens Corning products, a brand synonymous with innovation and reliability in the roofing industry. From shingles to underlayments, every component we install is designed to deliver unmatched performance and longevity.
          </p>

          <p>
            To back it up, we offer our Limited Transferable Lifetime Workmanship Warranty. This means we stand behind every nail, shingle, and seam we install. If anything goes wrong due to our work, we’ll make it right—period. Plus, our warranty is transferable, adding value to your home if you ever decide to sell. It’s our way of ensuring you’re protected for the long haul.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Ready to Experience The McCannical Difference?
          </h2>

          <p>
            Your home is one of your biggest investments, and your roof is its first line of defense. Don’t settle for the minimum when you can have a roof that’s stronger, smarter, and built to last.
          </p>

          <p>
            Contact McCannical Roofing &amp; Exteriors today at{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>
            , email us at{" "}
            <a href="mailto:info@mccannicalroofing.com" className="text-[#65C142] underline hover:text-[#7fd45f]">
              info@mccannicalroofing.com
            </a>
            , or visit our{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              contact page
            </Link>{" "}
            to schedule your free consultation. Let us show you what it means to go above and beyond—because at McCannical, it&apos;s Quality Over Everything!
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            Tags:
          </p>
          <div className="flex flex-wrap gap-2">
            {currentBlog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/blog" className="text-[#65C142] hover:underline">
            &larr; Return to Blog List
          </Link>
        </p>
      </div>
    </article>
  );
}
