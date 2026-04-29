import CareersBlock from "@/components/CareersBlock";
import ContactBlock from "@/components/ContactBlock";
import EducationBlock from "@/components/EducationBlock";
import FeaturedCases from "@/components/FeaturedCases";
import HeroSlider from "@/components/HeroSlider";
import InsightsBlock from "@/components/InsightsBlock";
import MarqueeStrip from "@/components/MarqueeStrip";
import PartnersWall from "@/components/PartnersWall";
import QuoteBlock from "@/components/QuoteBlock";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import SolutionsBlock from "@/components/SolutionsBlock";
import StatsBlock from "@/components/StatsBlock";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <HeroSlider />
        <QuoteBlock />
        <StatsBlock />
        <FeaturedCases />
        <SolutionsBlock />
        <EducationBlock />
        <PartnersWall />
        <InsightsBlock />
        <CareersBlock />
        <MarqueeStrip />
        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
