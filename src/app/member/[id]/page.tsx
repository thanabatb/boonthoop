import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { HomeIcon } from "@/components/icons";
import { MemberPortrait } from "@/components/member-portrait";
import { familyMembers, familyName, getFamilyMember } from "@/data/family-members";

type MemberPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return familyMembers.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getFamilyMember(id);

  if (!member) {
    return {
      title: "Member not found",
    };
  }

  return {
    title: `${member.name} | ${familyName}`,
    description: `Enter ${member.name}'s personal space in ${familyName}.`,
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { id } = await params;
  const member = getFamilyMember(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--text-primary)] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col rounded-[32px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,251,245,0.88))] shadow-[0_24px_80px_rgba(58,49,37,0.08)]">
        <header className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-5 sm:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
              Personal entry
            </p>
            <h1 className="mt-1 text-xl font-semibold sm:text-2xl">
              {familyName}
            </h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--accent)]">
            <HomeIcon className="h-5 w-5" />
          </div>
        </header>

        <main className="grid flex-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <section className="rounded-[28px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_18px_60px_rgba(58,49,37,0.06)]">
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--text-secondary)]">
              Selected member
            </p>
            <div className="mt-8 flex flex-col items-center text-center">
              <MemberPortrait member={member} size="lg" />
              <h2 className="mt-6 text-4xl font-semibold tracking-tight">
                {member.name}
              </h2>
              <p className="mt-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                {member.role}
              </p>
            </div>
          </section>

          <section className="max-w-xl">
            <p className="font-serif-display text-5xl leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-6xl">
              Welcome back, {member.name}.
            </p>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
              {member.intro}
            </p>
            <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-white/80 p-6 shadow-[0_18px_50px_rgba(58,49,37,0.05)]">
              <p className="text-sm uppercase tracking-[0.26em] text-[var(--text-secondary)]">
                Today&apos;s note
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--text-primary)]">
                {member.summary}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Choose another member
              </Link>
              <p className="text-sm text-[var(--text-secondary)]">
                Calm entry, then personalized content.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
