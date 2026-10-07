import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "mccannical-roofing-exteriors-is-now-a-proud-member-of-the-leander-chamber-of-commerce"
) || {
  title:
    "McCannical Roofing & Exteriors Is Now a Proud Member of the Leander Chamber of Commerce",
  category: "Leander Chamber of Commerce",
  categories: ["Leander Chamber of Commerce", "Trust-Building"],
  publishDate: "1 May 2026",
  featuredImage: "/blog9.jpg",
  tags: ["Leander", "Leander Chamber of Commerce", "Roofing Contractor"],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "McCannical Roofing & Exteriors officially joins the Leander Chamber of Commerce, deepening community roots and supporting local small businesses.",
  alternates: {
    canonical:
      "/mccannical-roofing-exteriors-is-now-a-proud-member-of-the-leander-chamber-of-commerce",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "McCannical Roofing & Exteriors joins the Leander Chamber of Commerce.",
    url: "https://www.mccannicalroofing.com/mccannical-roofing-exteriors-is-now-a-proud-member-of-the-leander-chamber-of-commerce",
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

export default function LeanderChamberBlogPage() {
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
            We&apos;re thrilled to announce that McCannical Roofing &amp; Exteriors has officially joined the Leander Chamber of Commerce — and we couldn&apos;t be more proud to deepen our roots in the community we call home. This is a milestone that means a lot to us, not just as a business, but as people who were raised in this city and have watched it grow into something truly special.
          </p>

          <p>
            For a local roofing company like ours, community isn&apos;t just a buzzword — it&apos;s the foundation of everything we do. Growing up in Leander, Texas, we watched this city transform into one of the most vibrant, fast-growing communities in the greater Austin area. Joining the Leander Chamber of Commerce is our way of investing in that growth and giving back to the neighbors who have trusted us with their roofs, their homes, and their peace of mind.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why the Leander Chamber of Commerce?
          </h2>

          <p>
            Honestly? We were blown away. The Leander Chamber of Commerce is far more active than we expected — with events happening every single week that bring local business owners, residents, and community leaders together. Whether it&apos;s networking mixers, ribbon cuttings, volunteer opportunities, or community initiatives, the Chamber is a hub of real connection in Leander.
          </p>

          <p className="italic border-l-2 border-[#65C142] pl-4 text-white">
            &ldquo;Joining the Leander Chamber has been so rewarding. I&apos;m honestly shocked at how active it is and how many great events they put on every week.&rdquo; — Will McCann (Owner)
          </p>

          <p>
            For a locally owned roofing and exteriors company, this kind of active community network is invaluable. It means we&apos;re not just a business operating in Leander — we&apos;re a genuine part of the fabric of this city. We believe that when local businesses support each other and invest in the community, everyone wins — homeowners, neighbors, and small business owners alike.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Rooting for Leander, TX — Because We Grew Up Here
          </h2>

          <p>
            There&apos;s something special about serving the community you grew up in. Leander has exploded in population in recent years, becoming one of the fastest-growing cities in the entire country. That kind of growth brings a lot of new homeowners to the area — families who need a trusted, local roofing contractor they can count on when things go wrong.
          </p>

          <p>
            At McCannical Roofing &amp; Exteriors, we bring that local knowledge and personal investment to every single job. We know the neighborhoods. We know the weather patterns that batter Central Texas roofs every spring and summer. And we know what it means to shake a neighbor&apos;s hand and stand behind our work — because this is our community too.
          </p>

          <p>
            Our Chamber membership is just one more way we&apos;re showing up for Leander. We look forward to participating in Chamber events, supporting local initiatives, and connecting with fellow small business owners who are building something great here. If you see us at a Chamber event, come say hello — we&apos;d love to meet you.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What McCannical Roofing &amp; Exteriors Offers Leander Homeowners
          </h2>

          <p>
            Whether you&apos;re dealing with storm damage after a Texas hailstorm, noticing worn shingles on an aging roof, or simply looking to upgrade your home&apos;s curb appeal before putting it on the market, our team is ready to help. We work with homeowners throughout Leander, Cedar Park, Georgetown, Round Rock, Liberty Hill, and the greater Austin area.
          </p>

          <p>
            Our services include roof installation and replacement, storm and hail damage repair, roof inspections, exterior siding, gutters and drainage solutions, and insurance claim assistance. We know navigating an insurance claim after storm damage can be stressful and confusing — that&apos;s another area where having a local, trusted contractor in your corner makes all the difference.
          </p>

          <p>
            As a Chamber member and a company rooted right here in this community, we&apos;re committed to honest work, transparent pricing, and results that stand up to the Texas weather year after year. No out-of-town storm chasers. No high-pressure sales tactics. Just straightforward roofing from people who actually care about the homes in this community.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Let&apos;s Work Together!
          </h2>

          <p>
            If your home is due for an inspection, you&apos;ve recently experienced storm damage, or you just want a second opinion on your roof&apos;s condition, we&apos;d love to hear from you. Reach out today for a free inspection and estimate — no obligation, no pressure!
          </p>

          <p>
            Phone:{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            &bull; Website:{" "}
            <Link href="/" className="text-[#65C142] underline hover:text-[#7fd45f]">
              McCannicalRoofing.com
            </Link>
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-2">
            Frequently Asked Questions (FAQs)
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Is McCannical Roofing &amp; Exteriors a local Leander company?
          </h3>
          <p>
            Yes! McCannical Roofing &amp; Exteriors is locally owned and operated, and the owner grew up right here in Leander, TX. We&apos;re not a national chain or an out-of-town storm chaser — we&apos;re your neighbors, and we stand behind every job we do.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What areas do you serve?
          </h3>
          <p>
            We serve Leander and the surrounding communities including Cedar Park, Georgetown, Round Rock, Liberty Hill, and the greater Austin area. If you&apos;re in Williamson or Travis County, we service your area! View our{" "}
            <Link href="/service-area" className="text-[#65C142] underline hover:text-[#7fd45f]">
              service area directory
            </Link>.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Do you help with insurance claims after storm damage?
          </h3>
          <p>
            Absolutely. Navigating a roofing insurance claim can be overwhelming. We work with homeowners through the entire process — from the initial inspection and damage documentation to communicating with your adjuster and completing the repairs.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            How do I know if my roof needs to be repaired or fully replaced?
          </h3>
          <p>
            That&apos;s exactly what our free inspection is for. A full replacement isn&apos;t always necessary — sometimes targeted repairs are all you need. We&apos;ll give you an honest assessment and walk you through your options so you can make the best decision for your home and budget.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What kinds of roofing materials do you work with?
          </h3>
          <p>
            We work with a wide range of materials including asphalt shingles, metal roofing, and more. During your free estimate, we&apos;ll help you choose the best material for your home&apos;s style, your budget, and the Central Texas climate.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            How long does a roof replacement take?
          </h3>
          <p>
            Most residential roof replacements in the Leander area are completed in one to two days, depending on the size of the roof and weather conditions. We&apos;ll give you a clear timeline before any work begins so you know exactly what to expect.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Why should I hire a Chamber of Commerce member for my roofing project?
          </h3>
          <p>
            Chamber membership signals that a business is invested in the local community — not just passing through. It adds a layer of accountability and trust. When you hire a Chamber member like McCannical Roofing &amp; Exteriors, you&apos;re supporting a business that has a real stake in keeping Leander a great place to live.
          </p>

          <p className="font-semibold text-white pt-4">
            McCannical Roofing &amp; Exteriors — Leander&apos;s local roofing and exteriors company, proud member of the Leander Chamber of Commerce.
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
