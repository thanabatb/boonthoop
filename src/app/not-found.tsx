import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 text-[var(--text-primary)]">
      <div className="max-w-md rounded-[28px] border border-[var(--border)] bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(58,49,37,0.08)]">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
          Member not found
        </p>
        <h1 className="mt-4 font-serif-display text-4xl tracking-tight">
          That room doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Choose a family member from the home screen to continue.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
