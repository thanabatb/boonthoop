import type { FamilyMember } from "@/data/family-members";
import { MemberCard } from "@/components/member-card";

type MemberCardGridProps = {
  members: FamilyMember[];
};

export function MemberCardGrid({ members }: MemberCardGridProps) {
  return (
    <section
      aria-label="Family members"
      className="mx-auto grid w-full max-w-6xl gap-5 px-0 pb-16 sm:grid-cols-2 sm:px-2 lg:grid-cols-4"
    >
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </section>
  );
}
