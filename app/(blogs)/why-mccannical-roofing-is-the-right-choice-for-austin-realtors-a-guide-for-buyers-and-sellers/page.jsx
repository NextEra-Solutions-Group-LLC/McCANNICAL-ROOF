import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "why-mccannical-roofing-is-the-right-choice-for-austin-realtors-a-guide-for-buyers-and-sellers"
) || {
  title: "Why McCannical Roofing is the Right Choice for Austin Realtors",
  category: "Real Estate",
  categories: ["Real Estate", "Partnership", "Trust-Building"],
  publishDate: "4 December 2025",
  featuredImage: "/blog16.jpg",
  tags: [
    "Austin",
    "Real Estate",
    "Realtor",
    "Roof Inspection",
    "Roofing Contractor",
    "Transferable Warranty",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "How McCannical Roofing & Exteriors helps Austin realtors, buyers, and sellers with pre-sale inspections, upgrades, and transferable warranties.",
  alternates: {
    canonical:
      "/why-mccannical-roofing-is-the-right-choice-for-austin-realtors-a-guide-for-buyers-and-sellers",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Why McCannical Roofing is the right choice for Austin realtors.",
    url: "https://www.mccannicalroofing.com/why-mccannical-roofing-is-the-right-choice-for-austin-realtors-a-guide-for-buyers-and-sellers",
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

export default function RealtorsGuideBlogPage() {
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
            As an Austin realtor, you&apos;re not just selling houses—you&apos;re helping families build futures and secure investments. In a market as hot as ours, the roof over a client&apos;s head can make or break a deal. That&apos;s where McCannical Roofing &amp; Exteriors comes in. More than a contractor; we&apos;re a partner in ensuring smooth transactions. Let&apos;s break it down from the perspectives of the buyers and sellers you represent, highlighting why recommending McCannical can elevate your service and close deals faster.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            For Sellers: Maximizing Value and Minimizing Headaches
          </h2>

          <p>
            Selling a home in Austin means navigating inspections, appraisals, and buyer demands—all while dealing with our unpredictable Texas storms. A solid roof isn&apos;t just a checkbox; it&apos;s a selling point that can boost curb appeal and property value.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Pre-Sale Inspections and Repairs
          </h3>
          <p>
            Sellers often discover roof issues during the home inspection phase, which can derail timelines. McCannical Roofing offers specialized real estate roof inspections that identify problems early, from minor leaks to past storm damage. Our team provides quick, reliable repairs using top-grade materials like Owens Corning shingles, ensuring the roof passes muster without costly surprises.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Upgrades That Pay Off
          </h3>
          <p>
            Every project includes complimentary upgrades, such as enhanced ventilation or impact-resistant shingles. For sellers, this means a more attractive listing: energy-efficient roofs that qualify for insurance discounts and look stunning in photos. Plus, our work enhances the home&apos;s overall efficiency, appealing to eco-conscious buyers in Austin&apos;s green-leaning market.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Transferable Lifetime Warranty
          </h3>
          <p>
            One of the biggest wins? McCannical&apos;s lifetime workmanship warranty is fully transferable to the new owner. This gives sellers peace of mind that they&apos;re not leaving buyers with potential liabilities that can become a negotiating tool.
          </p>

          <p>
            From a seller&apos;s viewpoint, partnering with McCannical means less stress, faster closings, and higher offers. Our insurance claim assistance is a game-changer, too; if hail or wind damage hits pre-listing, we handle the paperwork seamlessly.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            For Buyers: Building Confidence in Their New Home
          </h2>

          <p>
            Buyers in Austin are savvy—they want homes that withstand our hail-prone springs and scorching summers. A questionable roof can scare them off, but with McCannical in your corner, you can turn that into an opportunity for assurance and long-term savings.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Insurance and Financing Perks
          </h3>
          <p>
            New homeowners love knowing their roof qualifies for premium discounts due to high-quality installations. McCannical&apos;s team guides buyers through insurance assessments, potentially saving thousands.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Long-Term Protection and Value
          </h3>
          <p>
            For buyers, a McCannical roof means investing in peace of mind. Our full replacements come with upgrades at no extra cost, improving energy efficiency and reducing utility bills in Austin&apos;s heat.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Remember McCannical Roofing
          </h2>

          <p>
            Next time a client mentions roof concerns, point them to McCannical Roofing &amp; Exteriors. Let&apos;s build stronger homes and stronger relationships in Austin, one roof at a time.
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
            to schedule a Realtor inspection.
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
