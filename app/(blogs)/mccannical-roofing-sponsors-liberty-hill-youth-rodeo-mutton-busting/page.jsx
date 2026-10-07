import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blog.json";

const currentBlog = blogData.find(
  (b) =>
    b.slug ===
    "mccannical-roofing-sponsors-liberty-hill-youth-rodeo-mutton-busting"
) || {
  title:
    "McCannical Roofing & Exteriors Is Proud to Sponsor Liberty Hill's Own Quinten — Youth Mutton Busting Rodeo Rider",
  category: "Youth Rodeo Sponsor",
  categories: [
    "Liberty Hill TX",
    "Local Roofing Company",
    "Youth Rodeo Sponsor",
  ],
  publishDate: "8 May 2026",
  featuredImage: "/blog7.jpeg",
  tags: [
    "Liberty Hill TX",
    "Rodeo",
    "Roofing Contractor",
    "Youth Sponsor",
  ],
};

export const metadata = {
  title: `${currentBlog.title} | McCannical Roofing Blog`,
  description:
    "McCannical Roofing & Exteriors is proud to sponsor Liberty Hill's own Quinten in youth mutton busting rodeo.",
  alternates: {
    canonical:
      "/mccannical-roofing-sponsors-liberty-hill-youth-rodeo-mutton-busting",
  },
  openGraph: {
    title: currentBlog.title,
    description:
      "McCannical Roofing & Exteriors is proud to sponsor youth rodeo rider Quinten from Liberty Hill, Texas.",
    url: "https://www.mccannicalroofing.com/mccannical-roofing-sponsors-liberty-hill-youth-rodeo-mutton-busting",
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

export default function LibertyHillSponsorBlogPage() {
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
            At McCannical Roofing &amp; Exteriors, we&apos;ve always believed that protecting what matters most goes way beyond roofs and gutters. It&apos;s about people. It&apos;s about community. And out here in Liberty Hill, Texas, community means showing up for your neighbors — especially the little ones chasing big dreams!
          </p>

          <p>
            That&apos;s why we couldn&apos;t be more fired up to announce our newest sponsorship: a young cowboy named Quinten, who&apos;s competing in youth mutton busting right here in the heart of Williamson County.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            From the Jobsite to the Rodeo Arena — This Is What Liberty Hill Is Made Of
          </h2>

          <p>
            When we first heard about Quinten, we knew immediately this was exactly the kind of story McCannical was built to be part of. This kid suits up in full rodeo gear — chaps, vest, cowboy hat and all — climbs on the back of a sheep, and holds on for dear life with a grin on his face. That&apos;s grit. That&apos;s heart. That&apos;s Liberty Hill.
          </p>

          <p>
            We were honored to present Quinten with new rodeo gear to help fuel his 2026 season!
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            Why McCannical Roofing Sponsors Local Youth Athletics in the Liberty Hill Area
          </h2>

          <p>
            We&apos;re not a faceless national chain, we&apos;re your neighbors! Sponsoring youth programs — whether it&apos;s rodeo, little league, or 4-H — is our way of investing back into the communities that have trusted us with their homes. When a family in Liberty Hill lets McCannical climb up on their roof, that&apos;s not just a transaction. That&apos;s a relationship. And relationships run both ways.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            What Is Mutton Busting? (And Why It&apos;s the Best 8 Seconds in Youth Rodeo)
          </h2>

          <p>
            For those who haven&apos;t had the pleasure, mutton busting is a youth rodeo event where kids — typically ages 4 to 7 — hold on to a sheep as it runs and bucks across the arena, trying to stay on as long as possible. It&apos;s modeled after bull riding, scaled down for the youngest cowboys and cowgirls in the sport.
          </p>

          <p>
            It takes serious courage to climb on that sheep. These kids get thrown, get back up, and laugh about it. That spirit — fall down, get up, go again — is something we talk about on every McCannical job site. Roofing is hard, physical, skilled work. There are no shortcuts. You show up, you do it right, and you take pride in what you build.
          </p>

          <p>
            Mutton busting events are popular across Central Texas, with competitions held at rodeos throughout Williamson County, Burnet County, and the greater Austin area throughout the spring and summer season.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            McCannical Roofing &amp; Exteriors: Rooted in Liberty Hill, Serving All of Central Texas
          </h2>

          <p>
            Our team has been serving homeowners across the greater Austin area with expert roofing, siding, gutters, and exterior services. We specialize in storm damage repair and insurance claim assistance — which, if you&apos;ve lived in Central Texas for more than one hail season, you know is not something to take lightly.
          </p>

          <p>
            We work with all major insurance carriers and pride ourselves on making the claims process as painless as possible for homeowners. No pushy sales tactics, no bait-and-switch estimates. Just honest work by people who live in your community.
          </p>

          <p>
            If you&apos;re in Liberty Hill, Georgetown, Round Rock, Cedar Park, Leander, Burnet, Marble Falls, or anywhere in between, McCannical Roofing is your local roofing expert!
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-4">
            A Big Thank You to the Liberty Hill Rodeo Community
          </h2>

          <p>
            To the families, organizers, and volunteers who keep youth rodeo alive in Central Texas — thank you! Events like these build character, teach kids the value of courage and hard work, and keep our Western heritage alive in a part of Texas that&apos;s growing fast but never wants to lose its roots.
          </p>

          <p>
            We&apos;re honored to be sponsors, and we&apos;ll be cheering loudly for Quinten every time he climbs aboard!
          </p>

          <p className="italic text-gray-400">
            Interested in partnering with McCannical Roofing &amp; Exteriors for a youth sponsorship opportunity in Liberty Hill or the surrounding Central Texas area? Reach out to our team directly. We love supporting local.
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-2">
            Frequently Asked Questions (FAQ)
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What areas does McCannical Roofing &amp; Exteriors serve?
          </h3>
          <p>
            McCannical Roofing &amp; Exteriors serves homeowners and businesses throughout Central Texas, including Liberty Hill, Georgetown, Round Rock, Cedar Park, Leander, Pflugerville, Hutto, Taylor, Burnet, Marble Falls, and the greater Austin metro area. Check our{" "}
            <Link href="/service-area" className="text-[#65C142] underline hover:text-[#7fd45f]">
              service area overview
            </Link>{" "}
            for complete coverage.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Does McCannical Roofing sponsor local youth programs in Liberty Hill, TX?
          </h3>
          <p>
            Yes. McCannical Roofing &amp; Exteriors actively sponsors youth athletics and community programs in Liberty Hill and surrounding Williamson County communities. Our newest sponsorship supports Quinten, a youth mutton busting rodeo competitor from Liberty Hill, Texas.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What services does McCannical Roofing &amp; Exteriors offer?
          </h3>
          <p>
            McCannical Roofing &amp; Exteriors offers full residential and commercial roofing services, including roof replacement, roof repair, storm damage assessment, hail damage repair, siding installation, gutter installation and repair, and exterior renovation. We also provide expert insurance claim assistance for storm-damaged roofs.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Does McCannical help with insurance claims for roof damage in Texas?
          </h3>
          <p>
            Yes. McCannical Roofing works directly with homeowners and all major insurance carriers to navigate the storm damage and hail damage claims process. We serve as an advocate for the homeowner to ensure fair claim settlements throughout Central Texas.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            What is mutton busting and where can kids compete in Central Texas?
          </h3>
          <p>
            Mutton busting is a youth rodeo event in which children ages approximately 4–7 ride sheep in a competition similar to bull riding. It is a popular youth sport at rodeos across Central Texas, with events held throughout Williamson County, Travis County, Burnet County, and surrounding areas during the spring and summer rodeo season.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            Is McCannical Roofing a locally owned company?
          </h3>
          <p>
            Yes. McCannical Roofing &amp; Exteriors is a locally owned and operated roofing and exteriors company serving Central Texas. We are deeply invested in the communities we serve, including Liberty Hill, Georgetown, and the surrounding Hill Country region.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white pt-2">
            How can I contact McCannical Roofing &amp; Exteriors for a free roof inspection?
          </h3>
          <p>
            You can contact McCannical Roofing &amp; Exteriors directly through our{" "}
            <Link href="/contact" className="text-[#65C142] underline hover:text-[#7fd45f]">
              contact page
            </Link>{" "}
            or by phone at{" "}
            <a href="tel:5122383000" className="text-[#65C142] underline hover:text-[#7fd45f]">
              (512) 238-3000
            </a>{" "}
            to schedule a free roof inspection or storm damage assessment. Our team serves all of Central Texas and can typically respond quickly to requests in the Liberty Hill and Georgetown area.
          </p>

          <p className="font-semibold text-white pt-4">
            McCannical Roofing &amp; Exteriors | Liberty Hill, TX | Serving Central Texas
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
