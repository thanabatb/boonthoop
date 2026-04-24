import { HeartHomeIcon } from "@/components/icons";

export function FooterMessage() {
  return (
    <footer className="flex items-center justify-center gap-3 px-4 py-4 text-sm text-[var(--text-secondary)]">
      <HeartHomeIcon className="h-4 w-4 text-[var(--accent)]" />
      <p>Home is better together.</p>
    </footer>
  );
}
