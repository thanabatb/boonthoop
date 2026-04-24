import type { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10.75 12 3l9 7.75" />
      <path d="M5.5 9.8V20a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9.8" />
    </svg>
  );
}

export function HeartHomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10.75 12 3l9 7.75" />
      <path d="M6 9.8V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.8" />
      <path d="M9.4 12.2a2.02 2.02 0 0 1 2.6 0 2.02 2.02 0 0 1 2.6 0c.72.69.76 1.88.08 2.62L12 17.5l-2.68-2.68a1.94 1.94 0 0 1 .08-2.62Z" />
    </svg>
  );
}
