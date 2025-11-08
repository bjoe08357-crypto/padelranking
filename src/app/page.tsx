import { HeroSection } from "@/components/home/hero-section";
import { PadelByNumbers } from "@/components/home/padel-by-numbers";
import { NewsSection } from "@/components/home/news-section";
import { TopPlayersPodium } from "@/components/home/top-players-podium";
import { RankingsPreview } from "@/components/home/rankings-preview";
import { UpcomingTournaments } from "@/components/home/upcoming-tournaments";
import { ClubPortalTeaser } from "@/components/home/club-portal-teaser";
import { HeroIntroSection } from "@/components/home/hero-intro";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HeroIntroSection />
      <PadelByNumbers />
      <NewsSection />
      <TopPlayersPodium />
      <RankingsPreview />
      <UpcomingTournaments />
      <ClubPortalTeaser />
    </div>
  );
}