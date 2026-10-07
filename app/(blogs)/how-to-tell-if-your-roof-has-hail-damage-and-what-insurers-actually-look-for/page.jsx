import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "how-to-tell-if-your-roof-has-hail-damage-and-what-insurers-actually-look-for"
) || {
  title:
    "How To Tell If Your Roof Has Hail Damage (And What Insurers Actually Look For)",
  category: "Hail Damage",
  categories: ["Hail", "Insurance Claim", "Roof Damage", "Roof Repair"],
  publishDate: "15 April 2026",
  featuredImage: "/blog14.jpeg",
  tags: [
    "Hail",
    "Hail Damage",
    "Insurance Claim",
    "Roofing Contractor",
    "Storm Damage",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Learn how to tell if your roof has hail damage, the four soft metal test adjusters use, and what genuine hail impact looks like on asphalt shingles.",
  alternates: {
    canonical:
      "/how-to-tell-if-your-roof-has-hail-damage-and-what-insurers-actually-look-for",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Learn how to identify genuine roof hail damage and what insurance adjusters look for.",
    url: "https://www.mccannicalroofing.com/how-to-tell-if-your-roof-has-hail-damage-and-what-insurers-actually-look-for",
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

export default function HowToTellHailDamageBlogPage() {
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
            After a hail storm, one of the most common questions we hear is: &ldquo;I can&apos;t see any obvious damage from the ground — does that mean my roof is fine?&rdquo; The honest answer is: not necessarily. The most significant hail damage to asphalt shingles is often invisible from ground level, and even trained eyes can miss it without getting up on the roof.
          </p>

          <p>
            In this guide, we&apos;ll walk through exactly what hail damage looks like at every level of your home&apos;s exterior — and more importantly, what your insurance adjuster will be looking for when they arrive.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why Hail Damage Isn&apos;t Always Obvious
          </h2>

          <p>
            Asphalt shingles protect your home through a layer of granules — the gritty material that gives shingles their textured appearance. These granules deflect UV rays and shed water. When hail impacts a shingle, it bruises or displaces these granules, creating a soft spot in the shingle&apos;s mat. Over time, that spot loses its protective coating, becomes brittle, and eventually cracks or curls.
          </p>

          <p>
            The problem is that this bruising can be subtle. From 20 feet below, an impacted shingle can look completely normal. Up close, you&apos;ll see a circular discoloration, a depression in the surface, or granule loss concentrated in a random pattern.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Adjusters Look For: The Four Soft Metal Test
          </h2>

          <p>
            Here&apos;s a trade secret: experienced claims adjusters don&apos;t always start on the roof. They start with your soft metals — gutters, downspouts, AC condenser fins, vent caps, and window sills. These surfaces dent easily and hold the exact impression of a hail stone:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gutters and downspouts:</strong> Random circular dents, not from ladders or branches
            </li>
            <li>
              <strong>AC condenser fins:</strong> Bent or flattened fins in a pattern consistent with falling hail
            </li>
            <li>
              <strong>Vent caps and pipe boots:</strong> Dents on the top surface only
            </li>
            <li>
              <strong>Aluminum window screens:</strong> Holes or tears with rounded entry points
            </li>
            <li>
              <strong>Painted wood fascia:</strong> Chipped paint with exposed raw wood in a circular pattern
            </li>
          </ul>

          <p>
            If you have dents in your gutters and AC unit, there is almost certainly corresponding damage on your roof. The inverse is also true — if your soft metals show zero impact, a hail claim will be hard to support.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Hail Damage Looks Like on Asphalt Shingles
          </h2>

          <p>
            On the roof itself, adjusters are trained to look for specific patterns that distinguish hail damage from normal wear, foot traffic, or manufacturer defects. Here&apos;s how they tell the difference:
          </p>

          <p className="font-semibold text-white">Signs of genuine hail impact:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Random, non-directional distribution of impact marks across the field of the roof</li>
            <li>Circular depressions in the shingle surface (the &ldquo;bruise&rdquo; shape)</li>
            <li>Black or dark marks where granules have been displaced, exposing the fiberglass mat</li>
            <li>Granule-free circles that feel softer than surrounding shingle when pressed</li>
            <li>The damage appears on the top of ridges, not just valleys (where water accumulates)</li>
          </ul>

          <p className="font-semibold text-white pt-2">Signs that are NOT hail damage:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Blistering or bubbling from manufacturing defects or poor ventilation</li>
            <li>Granule loss in straight lines or uniform strips (weathering pattern)</li>
            <li>Cracking at shingle edges (thermal splitting from age)</li>
            <li>Foot traffic marks — these appear in logical pathways, not randomly</li>
            <li>Moss or algae growth — aesthetic issue, not hail-related</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Hail Damage to Metal Roofs and Tile
          </h2>

          <p>
            Metal roofing panels will show dents from significant hail, though metal is far more durable than asphalt. Small dents don&apos;t compromise waterproofing but can void certain manufacturer warranties. Tile and slate may crack or chip — this is straightforward to identify and photograph.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            How Hail Size Affects Damage Severity
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Quarter size (1&quot;) or smaller:</strong> May cause granule loss on older shingles; significant soft metal damage
            </li>
            <li>
              <strong>Golf ball size (1.75&quot;):</strong> Consistent bruising on most shingles; clear denting on gutters
            </li>
            <li>
              <strong>Baseball size (2.75&quot;) and larger:</strong> Immediate penetration possible; emergency repairs likely needed
            </li>
          </ul>

          <p>
            Central Texas frequently sees golf ball to baseball-size hail in the spring, particularly in Williamson County and the northern Austin suburbs including Georgetown, Leander, and Round Rock.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What To Do With This Information
          </h2>

          <p>
            If you notice any of the signs above after a hail event, contact McCannical Roofing &amp; Exteriors for a free inspection before calling your insurance company — or at a minimum, before the adjuster visits.
          </p>

          <p>
            We’ll provide complete photographic and written documentation of the storm damage and help you determine whether filing a claim is the best option.
          </p>

          <p>
            If you decide to move forward, having your own detailed inspection report gives you a strong, independent reference point in case the adjuster’s assessment comes in lower than expected.
          </p>

          <p className="pt-2">
            Contact us today at{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              schedule your free inspection online
            </Link>.
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
