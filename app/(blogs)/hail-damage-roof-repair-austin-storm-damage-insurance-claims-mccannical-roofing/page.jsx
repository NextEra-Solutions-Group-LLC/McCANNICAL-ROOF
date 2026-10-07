import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "hail-damage-roof-repair-austin-storm-damage-insurance-claims-mccannical-roofing"
) || {
  title:
    "Hail Damage Roof Repair Austin | Storm Damage & Insurance Claims | McCannical Roofing",
  category: "Hail",
  categories: ["Hail", "Insurance Claim", "Roof Damage", "Roof Repair"],
  publishDate: "18 April 2026",
  featuredImage: "/blog13.jpg",
  tags: ["Austin", "Hail", "Insurance Claim", "Roof Damage", "Roofing Contractor"],
};

export const metadata = {
  title: `${currentBlog.title}`,
  description:
    "Expert hail damage roof repair in Austin, Cedar Park, and Leander. Drone assessments, full insurance claim support, and Lifetime Workmanship Warranty.",
  alternates: {
    canonical:
      "/hail-damage-roof-repair-austin-storm-damage-insurance-claims-mccannical-roofing",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "Expert hail damage roof repair in Austin. Full insurance claim support and Lifetime Workmanship Warranty.",
    url: "https://www.mccannicalroofing.com/hail-damage-roof-repair-austin-storm-damage-insurance-claims-mccannical-roofing",
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

export default function HailDamageAustinBlogPage() {
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
            Living in Central Texas means dealing with hailstorms, high winds, and sudden weather events. When your roof is damaged, you need a trusted local roofing company that responds fast and fights for you with the insurance company. At McCannical Roofing, we specialize in storm damage roof repair and full replacements backed by our industry-leading Lifetime Workmanship Warranty.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why Choose McCannical for Storm Damage Repair
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>We are an Owens Corning Preferred Contractor</li>
            <li>Lifetime Workmanship Warranty on all roof replacements</li>
            <li>Full insurance claim advocacy — we deal with the adjusters so you don’t have to</li>
            <li>Advanced drone technology for accurate, safe damage assessments</li>
            <li>Transparent, honest, and detailed reporting every step of the way</li>
            <li>Quality Over Everything — we never cut corners</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Our Proven 5-Step Storm Damage Claim &amp; Repair Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Free Storm Damage Inspection:</strong> We schedule a free inspection (drone + physical) usually the same or next day after a major storm.
            </li>
            <li>
              <strong>Detailed Damage Assessment:</strong> We document every issue with photos, measurements, and a professional report.
            </li>
            <li>
              <strong>Insurance Claim Support:</strong> We work directly with your insurance company, attend the adjuster meeting, and negotiate on your behalf to make sure you get the coverage you deserve.
            </li>
            <li>
              <strong>Professional Repair or Replacement:</strong> Once approved, our crews complete the work efficiently using high-quality materials.
            </li>
            <li>
              <strong>Final Walkthrough &amp; Warranty:</strong> We do a final inspection with you and provide all documentation and your Lifetime Workmanship Warranty.
            </li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Signs Your Roof May Have Storm Damage (Even If You Can’t See It)
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Granules in your gutters or driveway</li>
            <li>Missing or cracked shingles</li>
            <li>Dents on vents, flashing, or gutters</li>
            <li>Interior ceiling stains or water marks</li>
            <li>Sudden increase in energy bills</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Storm Damage Services We Provide
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Hail damage roof repair and replacement</li>
            <li>Wind damage roof repair</li>
            <li>Shingle replacement</li>
            <li>Roof decking repair</li>
            <li>Flashing and chimney repair</li>
            <li>Full roof replacement when needed</li>
            <li>Emergency tarping and board-up service</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Service Areas
          </h2>

          <p>
            We proudly serve all of Greater Austin and surrounding communities including: Austin, Round Rock, Georgetown, Leander, Cedar Park, Pflugerville, Liberty Hill, Hutto, Manor, and Lakeway.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Our Customers Say
          </h2>

          <p className="italic border-l-2 border-[#65C142] pl-4 text-white">
            &ldquo;Fantastic experience with this roofing company. Will, the owner has excellent communication, is very professional, and was patient while working through the insurance claim process with me. The crew was great and very efficient with time. I really appreciated their help and would definitely recommend them.&rdquo; – Lisa M., Steiner Ranch, Austin
          </p>

          <p className="italic border-l-2 border-[#65C142] pl-4 text-white">
            &ldquo;Will and his crew did a great job at our house. He met with the insurance adjuster and helped walk us through the entire process. The roofers were on time and cleaned up nicely when they were finished. Would definitely recommend them and if needed will definitely hire them again.&rdquo; – Maggie S., Leander
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-2">
            Frequently Asked Questions (FAQs) About Storm Damage Roof Repairs
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: How soon after a hail storm should I get my roof inspected?
          </h3>
          <p>
            A: As soon as possible. Many insurance policies have time limits for filing claims. We recommend getting a free inspection within 1–2 weeks after a significant storm.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Will filing a roof insurance claim increase my premiums?
          </h3>
          <p>
            A: In most cases in Texas, a single claim for hail or wind damage does not increase your rates. We can discuss the specifics for your policy during your free inspection.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: How do I know if I have enough damage for insurance to cover a new roof?
          </h3>
          <p>
            A: Insurance companies usually go by percentage of damage. Our detailed drone inspection and report help show the true extent of the damage so you get a fair settlement.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Do you work directly with insurance companies?
          </h3>
          <p>
            A: Yes. We attend the adjuster meeting with you, provide all necessary documentation, and advocate for the best possible outcome.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: How long does the entire process take?
          </h3>
          <p>
            A: From inspection to completed roof usually takes 4–8 weeks, depending on insurance approval times and weather. We move as fast as possible.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: What if my insurance denies or under-pays the claim?
          </h3>
          <p>
            A: We have experience dealing with denied and lowballed claims. We will provide a second opinion and help you appeal if necessary.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Q: Do you offer emergency tarping after a storm?
          </h3>
          <p>
            A: Yes. We provide emergency tarping and board-up services to prevent further water damage while the claim is being processed.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-6">
            Ready to Protect Your Home?
          </h2>

          <p>
            Don’t wait until the next storm. Get a free professional storm damage roof inspection today.
          </p>

          <p>
            Call{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            now or{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              schedule your no-obligation inspection
            </Link>{" "}
            and let us show you what we mean by &ldquo;Quality Over Everything&rdquo;!
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
