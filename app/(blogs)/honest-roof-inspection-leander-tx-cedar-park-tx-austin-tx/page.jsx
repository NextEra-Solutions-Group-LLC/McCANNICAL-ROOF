import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug === "honest-roof-inspection-leander-tx-cedar-park-tx-austin-tx"
) || {
  title:
    "Who Do You Trust on YOUR Roof? Honest Roofing Assessments in Leander, Cedar Park & Greater Austin, TX",
  category: "Trust-Building",
  categories: ["Roof Damage", "Trust-Building"],
  publishDate: "23 April 2026",
  featuredImage: "/blog11.jpg",
  tags: [
    "Austin",
    "Cedar Park Roofer",
    "Hail",
    "Hail Damage",
    "Insurance Claim",
    "Leander Roofer",
    "Ranch at Brushy Creek",
    "Roofing Contractor",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Honest, no-pressure roof evaluations for Leander, Cedar Park, Round Rock, and Greater Austin homeowners from McCannical Roofing & Exteriors.",
  alternates: {
    canonical:
      "/honest-roof-inspection-leander-tx-cedar-park-tx-austin-tx",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Honest, no-pressure roof evaluations for Leander and Cedar Park homeowners.",
    url: "https://www.mccannicalroofing.com/honest-roof-inspection-leander-tx-cedar-park-tx-austin-tx",
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

export default function HonestRoofInspectionBlogPage() {
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
            Your roof is one of the biggest investments in your home. It protects your family, your belongings, and your peace of mind every single day. But when it comes time to have it inspected or repaired, who can you actually trust? At McCannical Roofing &amp; Exteriors, we believe trust isn’t just a word — it’s the foundation of everything we do.
          </p>

          <p>
            If you’re searching for a reliable roofer in Leander TX, Cedar Park TX, or the greater Austin area, you’ve probably seen the high-pressure sales tactics and scare stories. &ldquo;Your roof is about to collapse!&rdquo; &ldquo;You need a full replacement today!&rdquo; At McCannical, we do things differently.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Honest Roof Assessments — No Pressure, No Fear Tactics
          </h2>

          <p>
            We know homeowners in Williamson County and Travis County deal with everything from scorching Texas summers and sudden hailstorms to strong winds and heavy rains. That’s why we offer completely free, no-obligation roof evaluations for homes throughout Leander, Cedar Park, Round Rock, Liberty Hill, and North Austin.
          </p>

          <p>
            When our team shows up, you won’t get a sales pitch disguised as an inspection. You’ll get a straightforward, transparent assessment of your roof’s actual condition. We walk you through exactly what we see — good or bad — using clear photos and honest explanations:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Shingle wear and granule loss</li>
            <li>Flashing and chimney issues</li>
            <li>Potential storm damage (even if it’s not obvious)</li>
            <li>Ventilation and insulation problems</li>
          </ul>

          <p>
            We believe you deserve the truth, not a manufactured emergency.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Not Ready for Replacement or Don’t Need Repairs? That’s Perfectly Fine With Us
          </h2>

          <p>
            One of the things our Leander and Cedar Park clients love most is that we’re never pushy. If your roof looks solid and doesn’t need immediate work, we’ll happily tell you that. We’ll hand you our card and say, &ldquo;Keep us in mind the next time a big storm rolls through Central Texas.&rdquo;
          </p>

          <p>
            Because we know storms hit hard and fast here. Whether it’s a spring hailstorm in Leander or a wind event in Cedar Park, having a trusted local roofing company ready to go makes all the difference. Many of our longtime customers have called us years after their first inspection — and they’re always glad they did.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why Reputation Matters More Than Anything
          </h2>

          <p>
            At McCannical Roofing &amp; Exteriors, our reputation is everything. We’ve built our business the old-fashioned way — by doing quality work, showing up when we say we will, and treating every homeowner like a neighbor.
          </p>

          <p>
            We serve the fast-growing communities of Leander TX, Cedar Park TX, and surrounding Austin suburbs with full-service roofing and exterior solutions, including:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Roof inspections and maintenance plans</li>
            <li>Asphalt shingle replacement and repairs</li>
            <li>Metal roofing options</li>
            <li>Gutter installation and repair</li>
            <li>Exterior painting and siding work</li>
            <li>Storm damage restoration and insurance claim assistance</li>
          </ul>

          <p>
            We’re fully licensed and insured, and we stand behind every job with strong workmanship warranties.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Local Roofers Who Actually Know Your Neighborhood
          </h2>

          <p>
            Living in Central Texas means your roof faces unique challenges: intense UV exposure, dramatic temperature swings, and unpredictable severe weather. Local roofers understand these conditions better than out-of-town companies that blow in after a storm and disappear.
          </p>

          <p>
            When you call McCannical, you’re working with a team that lives and works right here in the Leander-Cedar Park area. We know the common roof problems in newer subdivisions, the differences between older homes in downtown Leander versus newer builds in Cedar Park, and how local building codes and HOA requirements affect your project.
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-2">
            Frequently Asked Questions (FAQ)
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: How often should I have my roof inspected in Leander or Cedar Park?
          </h3>
          <p>
            A: We recommend a professional roof inspection at least once a year, and always after any major storm or hail event. Texas weather can cause hidden damage that homeowners often miss until it leads to leaks or bigger problems.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: What are the common signs my roof needs attention?
          </h3>
          <p>
            A: Look for missing or curled shingles, granules in your gutters, dark streaks, sagging areas, or water stains on your ceiling. If you’ve had recent hail or high winds in the Austin area, it’s smart to get it checked even if nothing looks obviously wrong.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Do you help with insurance claims?
          </h3>
          <p>
            A: Yes. We work with all major insurance carriers and have extensive experience documenting storm damage for Leander, Cedar Park, and North Austin homeowners. We’ll help you navigate the claims process so you get the coverage you deserve.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: How long does a roof replacement take?
          </h3>
          <p>
            A: Most residential roof replacements in our area take 1–2 days, depending on the size of the home and complexity. We always work efficiently while protecting your landscaping and property.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: What if my roof doesn’t need replacement right now?
          </h3>
          <p>
            A: That’s great news! We’ll tell you exactly that. We’ll provide maintenance recommendations and invite you to keep our contact info for the next storm. Many of our best clients call us years later because they appreciated our honesty.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Do you serve areas outside of Leander and Cedar Park?
          </h3>
          <p>
            A: Yes. We proudly serve all of Williamson County and northern Travis County, including Round Rock, Liberty Hill, Georgetown, Pflugerville, and North Austin. Check our{" "}
            <Link href="/service-area" className="text-[#65C142] underline hover:text-[#7fd45f]">
              service area overview
            </Link>.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Are you insured?
          </h3>
          <p>
            A: Absolutely. McCannical Roofing &amp; Exteriors is fully insured and we carry strong workmanship warranties so you can have total confidence in our work.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Schedule Your Free Roof Evaluation Today
          </h2>

          <p>
            Whether you’re dealing with visible damage after the latest storm, noticing leaks, or simply want peace of mind before the next severe weather season, we’re here to help — without any pressure:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Honest, no-pressure roof inspections</li>
            <li>Transparent recommendations</li>
            <li>Local team that cares about your home</li>
            <li>Serving Leander, Cedar Park, Austin &amp; surrounding communities</li>
          </ul>

          <p>
            Don’t wait until the next big storm hits! Get the honest answers you need about your roof from a company that values trust above everything else.
          </p>

          <p>
            Call us today at{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            or visit{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              McCannicalRoofing.com
            </Link>{" "}
            to schedule your free evaluation online.
          </p>

          <p className="font-semibold text-white pt-4">
            McCannical Roofing &amp; Exteriors — Quality Over Everything!
          </p>

          <p className="text-sm italic text-gray-400">
            Proudly serving Leander TX, Cedar Park TX, and Greater Austin.
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
