import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "the-final-touch-why-mccannical-roofing-power-washes-the-driveway-after-your-new-roof"
) || {
  title: "The Final Touch: Why McCannical Roofing Power Washes The Driveway After Your New Roof",
  category: "Upgrades",
  categories: ["Complimentary Power Wash", "Trust-Building", "Upgrades"],
  publishDate: "29 April 2026",
  featuredImage: "/blog10.jpg",
  tags: ["complimentary", "free driveway clean", "power wash", "Roofer", "Roofing Contractor"],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "Learn why McCannical Roofing & Exteriors provides a complimentary high-pressure driveway power wash after every new roof replacement project.",
  alternates: {
    canonical:
      "/the-final-touch-why-mccannical-roofing-power-washes-the-driveway-after-your-new-roof",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Why McCannical Roofing & Exteriors provides a complimentary driveway power wash after every roof replacement.",
    url: "https://www.mccannicalroofing.com/the-final-touch-why-mccannical-roofing-power-washes-the-driveway-after-your-new-roof",
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

export default function DrivewayPowerWashBlogPage() {
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
          <p className="italic text-gray-400">
            At McCannical Roofing &amp; Exteriors, we believe the job isn’t truly finished until your entire property looks as good as new. That’s Why McCannical Roofing &amp; Exteriors Goes the Extra Mile—Ending With Your Driveway.
          </p>

          <p className="text-sm text-gray-400">
            Published by McCannical Roofing &amp; Exteriors | Serving Leander, Cedar Park, Georgetown, Round Rock, Austin &amp; Central Texas
          </p>

          <p>
            When most roofing contractors finish a job, they pack up their trucks, hand you a final invoice, and drive away—leaving you to deal with whatever mess the project left behind. At McCannical Roofing &amp; Exteriors, we do things differently. We believe the job isn&apos;t truly finished until your entire property looks as good as new. And that commitment starts with something our clients genuinely don&apos;t expect: a complimentary driveway power wash once your roofing project is complete.
          </p>

          <p>It sounds like a small thing. But it says something big about who we are and how we work.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            The Problem with &ldquo;Good Enough&rdquo; in Roofing
          </h2>

          <p>
            If you&apos;ve ever hired a contractor for a major home improvement project, you know the feeling: the work looks great, but the cleanup leaves something to be desired. Footprints through the yard. Scuff marks on the driveway. Roofing granules scattered across the landscape. It can make an otherwise beautiful new roof feel like a mixed blessing.
          </p>

          <p>That experience is exactly what we set out to eliminate.</p>

          <p>
            A roofing project is one of the largest investments you&apos;ll make in your home. In Central Texas, where intense sun, hail storms, and severe weather cycles put roofs through the wringer, a quality roof replacement isn&apos;t just an aesthetic upgrade—it&apos;s critical protection for your family, your belongings, and your property value. You deserve a contractor who treats that investment with the same seriousness you do.
          </p>

          <p>
            That&apos;s why Quality Over Everything isn&apos;t just a slogan at McCannical Roofing &amp; Exteriors. It&apos;s the standard that drives every decision we make from the first inspection to the final walkthrough.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why We Offer a Complimentary Driveway Power Wash
          </h2>

          <p>
            After all of the construction activity—crew vehicles coming and going, roofing materials being staged and loaded, and teams working hard in all kinds of weather—your driveway takes a beating. Dirt, debris, tire marks, and scuff marks accumulate in ways that are easy to overlook when you&apos;re focused on the roof above your head.
          </p>

          <p>We&apos;re not overlooking it.</p>

          <p>
            Once the roofing work is complete and our final cleanup crew has swept and inspected the property, our team returns to give your driveway a thorough, high-pressure power wash. The difference is immediate and noticeable. A clean driveway transforms the entire curb appeal of your home, making that new roof shine the way it deserves.
          </p>

          <p>
            This isn&apos;t an upsell. It&apos;s included—our thank-you for trusting us with one of the biggest investments you&apos;ll make in your home.
          </p>

          <p>
            We&apos;ve found that this single gesture does more to capture the spirit of our company than any brochure ever could. Clients notice. Neighbors notice. And it reflects exactly the kind of attention to detail we bring to every aspect of our work.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            The McCannical Difference: What Sets Us Apart From Other Roofing Companies in Central Texas
          </h2>

          <p>
            Choosing a roofing contractor in the Austin metro area isn&apos;t easy. There&apos;s no shortage of options, and after a major storm rolls through, you&apos;ll see no shortage of out-of-town storm chasers canvassing neighborhoods and promising fast, cheap fixes. We&apos;ve heard the stories—and we&apos;ve seen the results when those shortcuts catch up with homeowners.
          </p>

          <p>Here&apos;s what working with McCannical Roofing &amp; Exteriors actually looks like:</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Free Inspections &amp; Honest Estimates
          </h3>
          <p>
            We&apos;ll thoroughly evaluate your roof at no cost to you and give you straightforward, honest recommendations. If your roof needs to be replaced, we&apos;ll tell you—and show you why. If it doesn&apos;t, we&apos;ll tell you that too. Our inspections are educational, not high-pressure sales pitches. We want you to understand the condition of your roof so you can make the decision that&apos;s right for your home and your budget.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Automatic Roof Upgrades
          </h3>
          <p>
            Many of our roofing packages include upgraded materials and features at no additional charge. Better underlayment. Enhanced ventilation. Premium shingle options. We build value into our standard packages because we believe homeowners in Central Texas deserve quality protection, not just the bare minimum.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Lifetime Workmanship Warranty
          </h3>
          <p>
            We stand behind our work for as long as you own your home. If something goes wrong with the installation—not the materials, but the actual workmanship—we come back and make it right. Period. That confidence is only possible when you take every step of the job seriously, which is exactly what we do.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Complimentary Driveway Power Wash
          </h3>
          <p>
            The finishing touch that ties it all together. Because we care about how your entire property looks when we leave, not just the roof above it.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Roofing Services We Offer Throughout Central Texas
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Full Roof Replacement</strong> – Complete tear-off and installation using high-quality materials rated for Central Texas weather conditions.
            </li>
            <li>
              <strong>Roof Repair</strong> – Targeted fixes for storm damage, leaks, missing shingles, flashing issues, and more.
            </li>
            <li>
              <strong>Storm Damage Assessment</strong> – Post-hail and post-storm inspections with detailed documentation to support insurance claims.
            </li>
            <li>
              <strong>Roof Inspections</strong> – Peace-of-mind evaluations for homeowners who want to know the real condition of their roof before problems develop.
            </li>
            <li>
              <strong>Exterior Services</strong> – We go beyond the roof to help your entire home&apos;s exterior look its best.
            </li>
          </ul>

          <p>
            No matter the scope of the project, our approach stays the same: thorough work, honest communication, and a property that looks better when we leave than when we arrived.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Serving Homeowners Across Central Texas
          </h2>

          <p>
            McCannical Roofing &amp; Exteriors is proud to be a locally rooted company serving communities throughout the greater Austin area, including: Leander, Cedar Park, Georgetown, Round Rock, Austin, and surrounding Central Texas communities.
          </p>

          <p>We&apos;re not storm chasers. We&apos;re your neighbors—and we&apos;re here long after the job is done.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Ready for a Roofing Partner Who Truly Goes the Extra Mile?
          </h2>

          <p>
            Your roof protects everything you care about—your family, your memories, and your most valuable investment. It deserves more than the minimum. It deserves a team that holds itself to a higher standard from the first phone call to the final driveway wash.
          </p>

          <p>
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              Contact us today to schedule your free roof inspection and estimate.
            </Link>{" "}
            No pressure. No obligation. Just honest answers and exceptional work from a team that&apos;s in it for the long haul—and the long driveway.
          </p>

          <p className="font-semibold text-white pt-4">
            McCannical Roofing &amp; Exteriors | Quality Over Everything | Central Texas Roofing Specialists
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
