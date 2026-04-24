import Image from "next/image";

import type { FamilyMember } from "@/data/family-members";

type MemberPortraitProps = {
  member: FamilyMember;
  size?: "md" | "lg";
};

const dimensions = {
  md: {
    outer: "h-[9.5rem] w-[9.5rem]",
    inner: 128,
  },
  lg: {
    outer: "h-44 w-44 sm:h-52 sm:w-52",
    inner: 168,
  },
} as const;

export function MemberPortrait({
  member,
  size = "md",
}: MemberPortraitProps) {
  const config = dimensions[size];

  return (
    <div
      className={`relative flex ${config.outer} items-center justify-center rounded-full border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_40px_rgba(58,49,37,0.08)]`}
      style={{
        background: `radial-gradient(circle at 30% 20%, ${member.glow}, rgba(255,255,255,0.92) 62%)`,
      }}
    >
      <div className="flex h-[88%] w-[88%] items-center justify-center overflow-hidden rounded-full bg-white/70">
        <Image
          src={member.avatar}
          alt={`${member.name}, ${member.role}`}
          width={config.inner}
          height={config.inner}
          className="h-full w-full object-cover"
          priority={size === "lg"}
        />
      </div>
    </div>
  );
}
