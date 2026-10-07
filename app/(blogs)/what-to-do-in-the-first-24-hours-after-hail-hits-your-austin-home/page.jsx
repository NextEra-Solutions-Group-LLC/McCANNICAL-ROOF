import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "what-to-do-in-the-first-24-hours-after-hail-hits-your-austin-home"
) || {
  title:
    "What To Do In The First 24 Hours After Hail Hits Your Austin Home",
  category: "Hail",
  categories: ["Hail", "Storm Damage", "Insurance Claim"],
  publishDate: "12 April 2026",
  featuredImage: "/blog15.jpg",
  tags: [
    "Austin",
    "Hail",
    "Hail Damage",
    "Insurance Claim",
    "Roof Damage",
    "Roofer",
    "Roofing Contractor",
    "Storm Damage",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Essential steps to take in the first 24 hours after a hail storm in Austin and Central Texas to protect your home and your insurance claim.",
  alternates: {
    canonical:
      "/what-to-do-in-the-first-24-hours-after-hail-hits-your-austin-home",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "What to do in the first 24 hours after hail hits your Austin home.",
    url: "https://www.mccannicalroofing.com/what-to-do-in-the-first-24-hours-after-hail-hits-your-austin-home",
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

export default function First24HoursHailBlogPage() {
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
            It happens fast. You hear that unmistakable sound — hail hammering the roof, dinging the gutters, smashing against the windows. By the time the storm passes, you step outside and you&apos;re not sure whether to feel relieved or worried. In Central Texas, that feeling is familiar. We get more large-hail events than almost anywhere in the country, and the Austin metro sits squarely in &ldquo;Hail Alley.&rdquo;
          </p>

          <p>
            What you do in the next 24 hours matters more than most homeowners realize. The right moves protect your home from further damage, document everything your insurance adjuster needs, and help you avoid the out-of-state storm chasers who will be knocking on your door by tomorrow morning.
          </p>

          <p>
            McCannical Roofing &amp; Exteriors is based right here in Central Texas — founded in Leander. When a storm hits Georgetown, Round Rock, or anywhere in the Austin metro, our crews are already local. No fly-in contractors. No price gouging. Just neighbors helping neighbors.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Step 1: Stay Safe — Don&apos;t Inspect Your Roof Yet
          </h2>

          <p>
            We know the instinct is to climb up and see what happened. Resist it. Roofs are slippery after a storm, debris may have shifted, and structural damage you can&apos;t see could make sections unstable. Your first job is to do a quick visual from the ground only:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Walk the perimeter of your home and look up at the roofline from the ground</li>
            <li>Check for obvious missing shingles, dents in gutters, or debris on the roof</li>
            <li>Inspect your HVAC units, skylights, and any roof vents — these show hail impact clearly</li>
            <li>Look at your vehicles in the driveway — dents in the hood or roof are a proxy for hail size and intensity</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Step 2: Document Everything Before Touching Anything
          </h2>

          <p>
            Your phone camera is your most important tool right now. Insurance adjusters want to see the damage as it existed immediately after the storm — not after you&apos;ve cleaned up or made temporary repairs. Photograph everything (McCannical Roofing &amp; Exteriors can help with this!):
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Wide shots of your home from all four sides</li>
            <li>Close-ups of dented gutters, downspouts, and AC condenser fins</li>
            <li>Any visible damage to window screens, siding, or exterior trim</li>
            <li>The ground around your home — granules from shingles will be washing off in the runoff</li>
            <li>Your street address clearly visible in at least one photo</li>
            <li>The date and time stamp (turn this on in your phone&apos;s camera settings)</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Step 3: Protect Against Further Damage (Carefully)
          </h2>

          <p>
            If you have obvious breaches — missing shingles, a cracked skylight, holes in siding — you need a temporary fix to prevent interior water damage before a professional can get there. But do this carefully (McCannical Roofing &amp; Exteriors is here to help with this, too!):
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Use a tarp secured with boards or sandbags over any obvious holes — do not nail through the remaining shingles if avoidable</li>
            <li>Place buckets under any active interior drips and photograph the leak location</li>
            <li>Keep all receipts for materials you buy — these emergency expenses are often reimbursable under your claim</li>
            <li>Do not attempt a permanent repair before your insurance adjuster has inspected</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Step 4: Call Your Insurance Company
          </h2>

          <p>
            File your claim as soon as possible. In Texas, there are deadlines for filing hail damage claims — typically one year from the date of the storm under most policies, but some have shorter windows. Don&apos;t wait:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Have your policy number ready</li>
            <li>Note the date and approximate time of the storm</li>
            <li>Describe what you observed from the ground</li>
            <li>Ask specifically: What is my deductible? Do I have an ACV or RCV policy? Is there a separate wind/hail deductible?</li>
            <li>Request an adjuster appointment as soon as possible</li>
          </ul>

          <p>
            Texas has a separate wind and hail deductible that is usually expressed as a percentage of your dwelling coverage — often 1-2%. On a $350,000 home, that could be $3,500–$7,000 out of pocket. Knowing this upfront prevents surprises.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Step 5: Call a Qualified Local Roofer for an Independent Inspection
          </h2>

          <p>
            Insurance adjusters work for your insurance company. That doesn&apos;t mean they&apos;re dishonest — but it does mean you benefit from having your own expert eyes on the damage before or alongside the adjuster&apos;s visit. A good local roofer will:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Provide a written inspection report with photos</li>
            <li>Identify damage the adjuster may miss (soft metals, HVAC units, window screens)</li>
            <li>Meet the adjuster on-site if you request it</li>
            <li>Never ask you to sign a contract or assignment of benefits before inspection</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Watch Out for Storm Chasers
          </h2>

          <p>
            Within 24-48 hours of a major hail event in Austin, you will see unmarked trucks with out-of-state plates driving your neighborhood. These storm chasers often pressure homeowners into signing contracts on the spot, inflate claim amounts, use inferior materials, and disappear before warranty issues arise. Protect yourself:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Never sign anything at your door</li>
            <li>Check Google and BBB reviews</li>
            <li>Call a company you can actually visit in person</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            McCannical Roofing &amp; Exteriors is Here for You!
          </h2>

          <p>
            McCannical Roofing &amp; Exteriors is here for you every step of the way! If you’ve suffered hail damage to your roof and property, call us for a free assessment. We’ll guide you through the entire process and restore your property to a better-than-before condition!
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
            <a href="mailto:info@mccannicalroofing.com" className="text-[#65C142] underline hover:text-[#7fd45f]">
              info@mccannicalroofing.com
            </a>
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
