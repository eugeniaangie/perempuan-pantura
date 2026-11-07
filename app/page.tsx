import { FeaturedHero } from "@/components/home/featured-hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { LatestWorks } from "@/components/home/latest-works";
import { LibrarySection } from "@/components/home/library-section";
import { MetooBanner } from "@/components/home/metoo-banner";

export default function Home() {
  return (
    <>
      <FeaturedHero />
      <LatestWorks />
      <MetooBanner />
      <LibrarySection />
      <ImpactStats />
    </>
  );
}
