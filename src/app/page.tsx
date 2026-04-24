import { FamilyShowcase } from "@/components/family-showcase";
import { familyMembers, familyName } from "@/data/family-members";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#f1ede6_0%,_#ddd7cf_28%,_#b6b0aa_62%,_#8e8c8e_100%)] text-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.58),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.18),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-8">
        <FamilyShowcase familyName={familyName} members={familyMembers} />
      </div>
    </main>
  );
}
