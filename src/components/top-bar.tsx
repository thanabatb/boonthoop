import { HomeIcon } from "@/components/icons";

type TopBarProps = {
  familyName: string;
};

export function TopBar({ familyName }: TopBarProps) {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-[var(--border)] px-1">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
          Family entry
        </p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
          {familyName}
        </h1>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--accent)] shadow-[0_10px_30px_rgba(58,49,37,0.05)]">
        <HomeIcon className="h-5 w-5" />
      </div>
    </header>
  );
}
