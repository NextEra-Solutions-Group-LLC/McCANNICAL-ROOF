import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug === "how-mccannical-roofing-helped-save-1000-a-year-on-insurance"
) || {
  title:
    "How McCannical Roofing Helped One Homeowner Save $1,000 a Year on Insurance",
  category: "Class 4 Roof",
  categories: ["Hail", "Insurance Claim", "Class 4 Roof"],
  publishDate: "11 November 2025",
  featuredImage: "/blog18.jpg",
  tags: [
    "Austin",
    "Class 4 Roof",
    "Insurance Discount",
    "Owens Corning",
    "Roof Replacement",
    "State Farm",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "How installing an Owens Corning Class IV Duration STORM roof helped a Central Texas State Farm client save nearly $1,000 a year on home insurance.",
  alternates: {
    canonical:
      "/how-mccannical-roofing-helped-save-1000-a-year-on-insurance",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Save $1,000 a year on home insurance with an Owens Corning Class 4 roof replacement.",
    url: "https://www.mccannicalroofing.com/how-mccannical-roofing-helped-save-1000-a-year-on-insurance",
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

export default function Save1000InsuranceBlogPage() {
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
            Navigating a roof replacement with insurance can feel like a maze of red tape and fine print. That’s where McCannical Roofing steps in! We manage every step of the insurance claim, streamline repairs, and install a superior roof system to what you lost—all while sparing you the stress.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            How We Helped One Client Save $1,000 a Year
          </h2>

          <p>
            Recently, we helped one of our clients — a State Farm customer — save $1,000 a year on their home insurance. After installing a Class IV roof system from Owens Corning, their premiums dropped by nearly $980 annually. By upgrading to a more durable, hail impact-resistant roofing system from Owens Corning, this homeowner now has long-term protection and real savings year after year! It’s just one example of how the right roofing upgrade can pay off.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Are Class 4 Shingles, Exactly?
          </h2>

          <p>
            Not every shingle can handle Central Texas’ hail-heavy weather. Shingles are tested for impact resistance under the UL 2218 standard, where steel balls are dropped from varying heights to mimic hail. The ratings go from Class 1 (basic protection for small hail) to Class 4—the toughest tier available.
          </p>

          <p>
            To earn a Class 4 rating, a shingle must withstand a 2-inch steel ball dropped from 20 feet, multiple times, without cracking, splitting, or losing granules. Standard shingles often falter under Austin’s storm season, but Class 4 shingles are built to endure the worst and keep your home safe!
          </p>

          <p className="font-semibold text-white">Why they pay off:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Slashes repair bills by resisting storm damage</li>
            <li>Unlocks insurance discounts (up to 35% in many cases—ask your agent!)</li>
            <li>Lasts decades longer with premium warranties</li>
          </ul>

          <p className="italic text-gray-400">
            Bottom line: One upgrade protects your home, cuts costs, and adds instant curb appeal!
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Owens Corning’s Class 4 Star: Duration STORM&reg;
          </h2>

          <p>
            At McCannical Roofing &amp; Exteriors, we prefer to install{" "}
            <a
              href="https://www.owenscorning.com/en-us/roofing/shingles/trudefinition-duration-storm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#65C142] underline hover:text-[#7fd45f]"
            >
              Owens Corning’s
            </a>{" "}
            TruDefinition&reg; Duration STORM&reg; shingles, featuring WeatherGuard&reg; Technology, a polymeric backing that acts like a hidden shield, absorbing impacts that would shatter normal fiberglass shingles.
          </p>

          <p>
            Duration STORM&reg; shingles install just like traditional asphalt ones, blending seamlessly with your Austin home. Plus, with Owens Corning’s SureNail&reg; Technology—a reinforced strip for superior grip—they stay locked in place through Austin’s gusty winds and sudden downpours.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Ready to Unlock Your Savings?
          </h2>

          <p>
            Wondering if your roof qualifies for a free Class IV upgrade? Call McCannical Roofing &amp; Exteriors today! We’ll inspect your roof at no charge, review your insurance options, free upgrade opportunities and guide you through the entire process!
          </p>

          <p className="pt-2">
            Contact us at{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            or visit our{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              contact page
            </Link>{" "}
            to schedule your free roof evaluation.
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
