import Link from "next/link";

import { MemberPortrait } from "@/components/member-portrait";
import type { FamilyMember } from "@/data/family-members";

type MemberCardProps = {
  member: FamilyMember;
};

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Link
      href={`/member/${member.id}`}
      className="group relative flex min-h-[320px] flex-col items-center rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,250,244,0.94))] px-7 py-8 text-center shadow-[0_18px_50px_rgba(58,49,37,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(58,49,37,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
      aria-label={`${member.name}, ${member.role}`}
    >
      <div
        className="absolute inset-x-6 top-0 h-24 rounded-b-[24px] opacity-75 blur-2xl transition duration-200 group-hover:opacity-100"
        style={{ backgroundColor: member.glow }}
      />
      <div className="relative flex flex-1 flex-col items-center">
        <MemberPortrait member={member} size="md" />
        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
          {member.name}
        </h3>
        <p className="mt-3 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
          {member.role}
        </p>
        <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
          {member.tagline}
        </p>
      </div>
      <span className="mt-8 inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition duration-200 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
        Enter space
      </span>
    </Link>
  );
}
