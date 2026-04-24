import { FooterMessage } from "@/components/footer-message";
import { HeroSection } from "@/components/hero-section";
import { MemberCardGrid } from "@/components/member-card-grid";
import { TopBar } from "@/components/top-bar";
import { familyMembers, familyName } from "@/data/family-members";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(235,228,214,0.85),_transparent_56%)]" />
      <div className="pointer-events-none absolute inset-y-24 right-0 w-[24rem] bg-[radial-gradient(circle_at_center,_rgba(95,122,97,0.16),_transparent_62%)] blur-3xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 sm:px-6 lg:px-8">
        <TopBar familyName={familyName} />
        <main className="flex flex-1 flex-col justify-center">
          <HeroSection />
          <MemberCardGrid members={familyMembers} />
        </main>
        <FooterMessage />
      </div>
    </div>
  );
}
