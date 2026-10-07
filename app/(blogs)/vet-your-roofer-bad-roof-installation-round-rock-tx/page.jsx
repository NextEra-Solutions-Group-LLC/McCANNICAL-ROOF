import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) => b.slug === "vet-your-roofer-bad-roof-installation-round-rock-tx"
) || {
  title: "Vet Your Roofer. This Round Rock Family Didn’t — and Now They’re Paying for It Twice.",
  category: "Quality",
  categories: ["Quality", "Roof Repair", "Trust-Building"],
  publishDate: "8 Jul 2026",
  featuredImage: "/blog1.jpeg",
  tags: ["Poor Quality", "Roofer", "Roofing Contractor", "Round Rock"],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "A Round Rock family is dealing with a failing roof only three years old. Learn the red flags of bad roof installation and how to vet your contractor before signing.",
  alternates: {
    canonical: "/vet-your-roofer-bad-roof-installation-round-rock-tx",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "A Round Rock family is dealing with a failing roof only three years old. Learn the red flags of bad roof installation and how to vet your contractor.",
    url: "https://www.mccannicalroofing.com/vet-your-roofer-bad-roof-installation-round-rock-tx",
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

export default function VetYourRooferBlogPage() {
  return (
    <article className="min-h-screen bg-[#101317] text-gray-200 pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <p className="mb-6 text-sm">
          <Link href="/blog" className="text-[#65C142] hover:underline">
            &larr; Back to all blogs
          </Link>
        </p>

        {/* Categories & Publish Date */}
        <p className="text-xs uppercase tracking-wider text-[#65C142] font-semibold mb-2">
          {currentBlog.categories.join(", ")} &bull; <span>{currentBlog.publishDate}</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          {currentBlog.title}
        </h1>

        {/* Featured Image */}
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

        {/* Body Texts */}
        <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            We don’t take any pleasure in writing this post. There’s a family in Round Rock right now dealing with a failing roof that is only three years old. Three years. Their roof should have a decade or more of life ahead of it. Instead, they’re looking at out-of-pocket repair costs because of the contractor they trusted to install it.
          </p>

          <p>
            We were called out to take a look, and what we found was one of the worst installation jobs we’ve seen in all our years in this business. And that’s saying something.
          </p>

          <p>
            The frustrating part? The shingles themselves are Owens Corning Duration — a quality product that should last. The material wasn’t the problem. The installation was. And that’s 100% on the contractor who did the work.
          </p>

          <p>
            We’re writing this because we want Central Texas homeowners to know what to look for before they sign a contract — not after the damage is already done.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why Bad Roofing Installation Is More Common Than You Think
          </h2>

          <p>
            After every major hail or wind event in Central Texas — and we get them regularly in{" "}
            <Link href="/service-area" className="text-[#65C142] underline hover:text-[#7fd45f]">
              Leander, Cedar Park, Georgetown, Round Rock, and Pflugerville
            </Link>{" "}
            — the storm chasers show up. These are out-of-town contractors who follow severe weather patterns, knock on doors while the neighborhood is still shaken, and offer fast, cheap replacements to homeowners who are stressed and just want the problem solved.
          </p>

          <p>
            Some of them cut corners on materials. More of them cut corners on installation. And because roofing work isn’t something most homeowners can evaluate from the ground, bad work often goes undetected until the damage has compounded — sometimes for years.
          </p>

          <p>
            By the time the leaks start, the water intrusion shows up on ceilings, or a strong storm exposes the underlying problems, the contractor is long gone. They’re in the next market chasing the next storm. And the homeowner is left holding the bill.
          </p>

          <p>That’s exactly what happened in Round Rock.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Poor Installation Actually Looks Like
          </h2>

          <p>
            This is what red flags look like — both during and after a roofing job — so you know what to watch for.
          </p>

          <p>Signs of bad installation include:</p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Improper nailing patterns</strong> — nails placed too high, too low, or at wrong angles cause shingles to lift, slide, or blow off in wind events. This is one of the most common installation failures we see.
            </li>
            <li>
              <strong>Missing or inadequate underlayment</strong> — underlayment is the critical moisture barrier between your shingles and your decking. Skipping it or using substandard material is a ticking clock.
            </li>
            <li>
              <strong>Poor flashing at transitions</strong> — around chimneys, valleys, skylights, and wall intersections. Flashing is where most roof leaks originate, and it’s where lazy contractors cut the most corners.
            </li>
            <li>
              <strong>Improper ventilation</strong> — a roof without adequate ventilation traps heat and moisture in the attic, dramatically shortening the life of the shingles above and the decking below.
            </li>
            <li>
              <strong>Misaligned shingles</strong> — beyond looking unprofessional, misaligned shingles create gaps and inconsistencies that allow water intrusion over time.
            </li>
            <li>
              <strong>Missing drip edge</strong> — drip edge protects the fascia and directs water away from the roof edge. Omitting it is both a code violation and a direct path for water damage.
            </li>
          </ul>

          <p>
            Any one of these issues can cause problems. Several of them together — which is what we found in Round Rock — means the roof was never really protecting the home to begin with.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            How to Vet a Roofing Contractor Before You Sign Anything
          </h2>

          <p>Hiring a roofer doesn’t have to be a gamble. Here’s what we tell every homeowner who asks:</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            1. Verify they have a local, permanent address.
          </h3>
          <p>
            Storm chasers operate out of temporary locations or don’t have a Texas address at all. A contractor with a real local presence — one who lives and works in your community — is accountable in ways that a transient operation simply isn’t.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            2. Ask about their manufacturer credentials.
          </h3>
          <p>
            McCannical Roofing &amp; Exteriors is an Owens Corning Preferred Contractor. That designation isn’t handed out freely — it requires training, installation standards, and ongoing accountability to the manufacturer. Ask any roofer you’re considering whether they hold manufacturer credentials and what those credentials actually mean.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            3. Get everything in writing before work starts.
          </h3>
          <p>
            Scope of work, materials specified by brand and product line, timeline, warranty terms, and payment schedule. If a contractor is vague about materials or resists putting specifics in writing, walk away.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            4. Look at real local reviews.
          </h3>
          <p>
            Not just star ratings — read the actual reviews. Look for patterns in what people say about communication, cleanup, whether the crew showed up when they said they would, and how the contractor handled any problems that came up. Anyone can have a few good reviews. Consistent quality shows up across dozens of them.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            5. Be suspicious of door-knockers after a storm.
          </h3>
          <p>
            We’re not saying every contractor who knocks on a door after a hail event is bad. But the urgency they create — “we’re in the neighborhood,” “we can get to you right away,” “we’ll handle everything with your insurance” — is designed to get you to sign before you’ve had a chance to think. Take your time. The damage isn’t going anywhere. A good contractor will still be available in a week.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What McCannical Does Differently
          </h2>

          <p>
            We’re local. Our crew lives in this community. When we do a job in Round Rock or Cedar Park or Georgetown, we drive past that house again. We run into those homeowners at the grocery store. We’re not going anywhere, which means we can’t afford to cut corners and disappear.
          </p>

          <p>Every McCannical installation includes:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Owens Corning preferred installation standards</strong> — proper nailing patterns, underlayment, flashing, and ventilation. Every time.
            </li>
            <li>
              <strong>Free shingle and ventilation upgrades</strong> — included standard, not sold as add-ons.
            </li>
            <li>
              <strong>Lifetime transferable workmanship warranty</strong> — we stand behind our work long after the check clears.
            </li>
            <li>
              <strong>Complimentary driveway power wash</strong> — because your property should look better when we leave than when we arrived.
            </li>
          </ul>

          <p>
            We also do free inspections — no pressure, no obligation. If your roof is fine, we’ll tell you that. If it’s not, we’ll show you exactly what we found and what it’ll take to fix it.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            If You’re Not Sure About Your Roof — Just Call Us!
          </h2>

          <p>
            If you’ve had roof work done in the last few years and you’re not 100% confident in the contractor who did it — especially if it was after a storm event — it’s worth having someone take a look. Catching installation problems early is dramatically less expensive than dealing with the water damage they cause down the road.
          </p>

          <p>
            McCannical Roofing &amp; Exteriors serves Round Rock, Leander, Cedar Park, Georgetown, Pflugerville, North Austin, and all of greater Austin. Free inspection. Straight answers. No pressure.
          </p>

          <p>
            Phone:{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            &bull; Website:{" "}
            <Link href="/" className="text-[#65C142] underline hover:text-[#7fd45f]">
              McCannicalRoofing.com
            </Link>{" "}
            &bull; Email:{" "}
            <a href="mailto:Info@McCannicalRoofing.com" className="text-[#65C142] underline hover:text-[#7fd45f]">
              Info@McCannicalRoofing.com
            </a>
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-6">
            Frequently Asked Questions: How to Vet a Roofing Contractor in Central Texas
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            How do I know if my roof was installed correctly?
          </h3>
          <p>
            The most reliable way is to have a qualified roofing contractor inspect it. From the ground, look for misaligned shingles, exposed nail heads, or shingles that appear to be lifting at the edges. Missing drip edge along the roofline is sometimes visible. But most installation failures — improper nailing, inadequate underlayment, poor flashing — are only visible from the roof itself.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            How long should a roof last in Central Texas?
          </h3>
          <p>
            A properly installed architectural shingle roof in Central Texas should last 20–30 years under normal conditions. Impact-resistant Class 4 shingles like the Owens Corning Duration STORM can last even longer. A roof that is failing at 3 years old is almost certainly an installation problem, not a material problem.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What is an Owens Corning Preferred Contractor?
          </h3>
          <p>
            An Owens Corning Preferred Contractor has met Owens Corning’s standards for installation quality, carries appropriate licensing and insurance, and has demonstrated a track record of quality work. The designation allows them to offer enhanced warranty coverage that non-preferred contractors cannot. McCannical Roofing &amp; Exteriors is an Owens Corning Preferred Contractor.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What should I do if I think my roof was improperly installed?
          </h3>
          <p>
            Call a reputable local roofing contractor for an independent inspection before you contact the original contractor. You’ll want documentation of what was found before any conversations happen. If the installation was recent, the original contractor’s workmanship warranty — if they provided one — may cover repairs. If they’re no longer reachable or refuse to respond, your homeowner’s insurance may have options as well.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Does McCannical Roofing offer free roof inspections in Round Rock and the Austin area?
          </h3>
          <p>
            Yes. McCannical Roofing &amp; Exteriors offers free inspections and estimates for homeowners throughout Round Rock, Leander, Cedar Park, Georgetown, Pflugerville, North Austin, and the greater Austin metro. No pressure, no obligation — just an honest assessment of what’s up there.
          </p>

          <p className="font-semibold text-white pt-4">
            McCannical Roofing &amp; Exteriors | Quality Over Everything
          </p>

          <p className="text-sm italic text-gray-400">
            Proudly serving Round Rock, Leander, Cedar Park, Georgetown, Pflugerville, North Austin, Liberty Hill, and the Greater Austin metro area.
          </p>
        </div>

        {/* Tags */}
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

        {/* Bottom Navigation */}
        <p className="mt-12 text-sm">
          <Link href="/blog" className="text-[#65C142] hover:underline">
            &larr; Return to Blog List
          </Link>
        </p>
      </div>
    </article>
  );
}
