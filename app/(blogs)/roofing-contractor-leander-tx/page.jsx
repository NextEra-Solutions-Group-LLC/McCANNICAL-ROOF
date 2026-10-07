import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) => b.slug === "roofing-contractor-leander-tx"
) || {
  title:
    "Quality Over Everything: Why McCannical Roofing's Logo Is the Mark of Quality in Leander & Greater Austin",
  category: "Quality Over Everything",
  categories: [
    "Class 4 Roof",
    "Leander Roofer",
    "Lifetime Workmanship Warranty",
    "Local Roofing Company",
    "Quality Over Everything",
  ],
  publishDate: "18 May 2026",
  featuredImage: "/blog6.jpg",
  tags: [
    "Austin",
    "Hail Damage",
    "Leander",
    "Local",
    "Quality",
    "Roofer",
    "Roofing Contractor",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Why McCannical Roofing's logo stands for Quality Over Everything across Leander, Cedar Park, Georgetown, and Greater Austin.",
  alternates: {
    canonical: "/roofing-contractor-leander-tx",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Why McCannical Roofing's logo stands for Quality Over Everything across Leander and Greater Austin.",
    url: "https://www.mccannicalroofing.com/roofing-contractor-leander-tx",
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

export default function LeanderRooferBlogPage() {
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
            When you see the McCannical Roofing &amp; Exteriors logo on the yard sign in front of your neighbor&apos;s freshly finished home, you&apos;re seeing something that means more than a company name. You&apos;re seeing a guarantee. A philosophy. A standard that a native Leanderthal built from the ground up, right here in Central Texas.
          </p>

          <p>
            We say it plainly: <strong>Quality Over Everything</strong>. It&apos;s not a marketing tagline borrowed from a template. It&apos;s the reason McCannical exists, the standard every crew member is held to, and the promise behind every roof we install from Leander and Georgetown to Cedar Park and Round Rock to the Greater Austin area. And our logo? That&apos;s the mark that says the promise has been kept.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Born and Raised — A Native Leanderthal&apos;s Take on Roofing
          </h2>

          <p>
            There&apos;s a term Leander locals use with a mixture of pride and playfulness: <em>Leanderthal</em>. If you&apos;ve been here long enough to remember when 183A was still just a plan on paper, when Bagdad Road had nothing but scrub cedar on either side, or when a Friday night in town meant the Leander football game and nothing else — you know what it means. It means you&apos;re rooted here. This is home.
          </p>

          <p>
            McCannical Roofing &amp; Exteriors was started by a Leanderthal — someone who has watched this community grow from a quiet Hill Country bedroom town into one of the fastest-growing corridors in Texas. That growth brings opportunity, but it also brings a flood of out-of-town contractors who arrive after every hail storm, hand out glossy flyers, and disappear just as fast. We&apos;ve all seen the storm chasers. We&apos;ve all heard the horror stories of cut corners and voided warranties left behind.
          </p>

          <p>
            McCannical isn&apos;t that. We&apos;re here before the hail storm, during the storm, and long after — because this is our community, not a job site we&apos;re passing through.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What &ldquo;Quality Over Everything&rdquo; Really Means
          </h2>

          <p>
            Our logo is more than a design — it&apos;s a declaration of standards. When it appears on your contract, your materials, and our crew&apos;s shirts, it signals that every decision made on your roof was made with quality as the primary filter. Not speed. Not margin. Not convenience. Quality first, last, and always.
          </p>

          <p>
            In a market where some contractors spec out the cheapest qualifying shingle and call it a day, McCannical approaches every project differently. We walk homeowners through what good, better, and best actually looks like on their specific roof, in their specific neighborhood — factoring in Central Texas heat load, hail frequency in Williamson &amp; Travis County, and the resale expectations of the area.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Premium Upgrades That Actually Protect Your Home
          </h2>

          <p>
            Here in the Austin area, your roof faces a unique set of challenges — punishing summer heat that routinely tops 105&deg;F, hail events that can peel lesser materials like wet paper, and UV exposure that degrades entry-level shingles years ahead of schedule. The right upgrades aren&apos;t luxury items. They&apos;re smart investments in the home you&apos;re living in and the equity you&apos;re building.
          </p>

          <p>
            McCannical offers a full range of upgrades and discusses each one transparently, so you understand exactly what you&apos;re buying and why it matters:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Impact-Resistant Shingles</strong> — Class 4 Impact-Resistant shingles are engineered for Central Texas hail. They can earn you a homeowner&apos;s insurance discount — and they stay intact when the next storm rolls through. Our favorite Class 4 shingles are from Owens Corning, their TruDefinition Duration STORM series.
            </li>
            <li>
              <strong>Synthetic Underlayment</strong> — Far superior to traditional felt, synthetic underlayment is tear-resistant and water-repellent — your home&apos;s true last line of defense before the shingles go on.
            </li>
            <li>
              <strong>Ridge Cap Upgrades</strong> — The ridge is where wind damage starts. Premium laminated ridge caps add structural integrity and a cleaner finished look from the street. We love upgrading our clients to the RizerRidge high-profile ridge cap option from Owens Corning.
            </li>
            <li>
              <strong>Ventilation Systems</strong> — Improper attic ventilation is the silent killer of roofs in Texas heat. Balanced intake and exhaust ventilation extends your roof&apos;s life and reduces your cooling load. Our favorite ventilation? The 35W solar attic fan from Attic Breeze.
            </li>
            <li>
              <strong>Gutters &amp; Exteriors</strong> — A roof is only as good as the drainage system around it. We handle seamless gutters, fascia, soffits, and siding — a complete exterior built to last together.
            </li>
          </ul>

          <p>
            Every upgrade we offer is one we believe in. If we wouldn&apos;t put it on our own homes in Leander, we&apos;re not recommending it for yours.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            The Lifetime Warranty: Our Logo, Our Promise
          </h2>

          <p>
            Every roof McCannical Roofing installs is backed by our lifetime workmanship warranty — on top of the manufacturer&apos;s material warranty. If it was installed wrong, we make it right. No runaround, no fine print designed to wriggle out of accountability.
          </p>

          <p>
            Let&apos;s be honest: a warranty is only as good as the company behind it. A storm chaser from out of state can hand you a lifetime warranty certificate, but if they don&apos;t answer the phone in two years — or don&apos;t exist in two years — that paper means nothing.
          </p>

          <p>
            Our workmanship warranty covers installation defects and labor issues that manufacturer warranties don&apos;t touch. Paired with qualifying manufacturer material warranties on premium shingle lines, homeowners who go with McCannical can rest easily knowing their single biggest exterior investment is protected from multiple angles. And if you sell your home? Our warranty transfers to the new owner, adding real value at closing.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Serving Our Community: Leander, Georgetown, Cedar Park &amp; Beyond
          </h2>

          <p>
            McCannical Roofing &amp; Exteriors proudly serves homeowners across Williamson County, Travis County and surrounding communities, including Leander, Georgetown, Cedar Park, Round Rock, Liberty Hill, Pflugerville, Hutto, Taylor, and North Austin. When you hire local, you hire accountability — someone who will see you at the grocery store and wants that conversation to go well.
          </p>

          <p>
            Whether your home is in a newer Leander development near Crystal Falls, an established Georgetown neighborhood off Williams Drive, or a Cedar Park subdivision near Brushy Creek — McCannical knows your area, your HOA&apos;s roofing requirements, and the specific weather patterns that affect your exterior most. Check our{" "}
            <Link href="/service-area" className="text-[#65C142] underline hover:text-[#7fd45f]">
              Central Texas service areas
            </Link>{" "}
            for full details.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Insurance Claims? We&apos;ve Got You Covered There, Too!
          </h2>

          <p>
            Hail and wind events in the Austin area have become more frequent, and navigating an insurance claim can feel like a second job. McCannical provides complimentary roof inspections and works alongside your insurance adjuster to make sure every legitimate line of damage is documented correctly. We&apos;re advocates for the homeowner — not for the fastest possible close.
          </p>

          <p>
            If your roof took a hit from a recent storm in the Leander, Cedar Park, Round Rock or Georgetown area, call us before you call your insurance company. A McCannical inspection arms you with the documentation you need to get a fair settlement.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Ready for a Roof That Lives Up to Its Name?
          </h2>

          <p>
            If you&apos;re a homeowner dealing with a leaky roof, storm damage, an aging shingle system past its prime, or just curious what a quality installation actually looks like — we&apos;re ready to talk. Our estimates are free, our inspections are honest, and our work is guaranteed for life.
          </p>

          <p className="font-semibold text-white">
            Quality Over Everything. Not a slogan. A standard. The McCannical Roofing standard!
          </p>

          <p className="pt-2">
            Call McCannical Roofing &amp; Exteriors today for your free roof inspection!{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              contact us online
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
