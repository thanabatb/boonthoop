"use client";

import Image from "next/image";
import { useState } from "react";

import type { FamilyMember } from "@/data/family-members";

type FamilyShowcaseProps = {
  familyName: string;
  members: FamilyMember[];
};

const stackTransforms = {
  "-2":
    "translate(calc(-50% - clamp(7.4rem, 12vw, 10rem)), 3rem) scale(0.8) rotate(-7deg)",
  "-1":
    "translate(calc(-50% - clamp(4.2rem, 6vw, 5.8rem)), 1.35rem) scale(0.92) rotate(-4deg)",
  "0": "translate(-50%, 0rem) scale(1) rotate(0deg)",
  "1":
    "translate(calc(-50% + clamp(4.2rem, 6vw, 5.8rem)), 1.35rem) scale(0.92) rotate(4deg)",
  "2":
    "translate(calc(-50% + clamp(7.4rem, 12vw, 10rem)), 3rem) scale(0.8) rotate(7deg)",
} as const;

function getRelativeOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

export function FamilyShowcase({
  familyName,
  members,
}: FamilyShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.max(
      0,
      members.findIndex((member) => member.id === "me"),
    ),
  );
  const activeMember = members[activeIndex];

  return (
    <section className="mx-auto w-full max-w-[90rem]">
      <div className="overflow-hidden rounded-[2.4rem] border border-white/55 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_transparent_26%),linear-gradient(135deg,rgba(250,247,243,0.88),rgba(233,226,219,0.72)_38%,rgba(214,208,202,0.64)_100%)] px-4 py-6 shadow-[0_34px_120px_rgba(88,72,56,0.16)] backdrop-blur-xl sm:px-7 sm:py-8 lg:px-9 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-black/42 sm:text-xs">
              {familyName}
            </p>
            <div className="mt-5 flex items-center justify-center gap-2.5">
              {members.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={member.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3.5 w-3.5 rounded-full border border-black/55 transition ${
                    isActive ? "bg-black" : "bg-white/50"
                  }`}
                  aria-label={`Show ${member.name}`}
                  aria-pressed={isActive}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto mt-8 h-[17rem] w-full max-w-[28rem] sm:h-[20rem] md:h-[22rem] lg:h-[23rem]">
            {members.map((member, index) => {
              const offset = getRelativeOffset(index, activeIndex, members.length);

              if (Math.abs(offset) > 2) {
                return null;
              }

              const offsetKey = String(offset) as keyof typeof stackTransforms;
              const isActive = offset === 0;

              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group absolute left-1/2 top-0 h-[11.5rem] w-[7.5rem] overflow-hidden rounded-[1.2rem] border border-white/70 bg-white/92 shadow-[0_24px_50px_rgba(89,76,62,0.14)] transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#d3cdc6] sm:h-[14.5rem] sm:w-[9.4rem] md:h-[16rem] md:w-[10.4rem]"
                  style={{
                    transform: stackTransforms[offsetKey],
                    zIndex: 40 - Math.abs(offset) * 10,
                    opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.74 : 0.34,
                    filter: isActive ? "none" : "grayscale(1)",
                  }}
                  aria-label={`Preview ${member.name}`}
                  aria-pressed={isActive}
                >
                  <Image
                    src={member.portrait}
                    alt={`${member.name} placeholder portrait`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 166px"
                    priority={isActive}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                </button>
              );
            })}
          </div>

          <div className="mt-3 text-center">
            <div className="flex items-center justify-center gap-5">
              <RuleLine />
              <h1 className="text-[clamp(2.8rem,7vw,4.6rem)] font-semibold tracking-[-0.07em] text-black/86">
                {activeMember.name}
              </h1>
              <RuleLine reverse />
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <ShortRule />
              <p className="text-[clamp(1.45rem,3vw,2rem)] font-medium tracking-[-0.05em] text-black/66">
                {activeMember.role}
              </p>
              <ShortRule reverse />
            </div>

          </div>

          <a
            href={activeMember.spaceUrl}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto mt-7 flex w-full max-w-xl items-center justify-between rounded-full border border-[#2f2c29]/10 bg-[linear-gradient(180deg,#312c28,#1f1b18)] px-7 py-4 text-white shadow-[0_22px_46px_rgba(58,47,38,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_56px_rgba(58,47,38,0.24),inset_0_1px_0_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#d3cdc6]"
          >
            <div className="text-left">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                Selected space
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">
                Enter Space
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#221d1a] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-200 group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function RuleLine({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`hidden min-w-[5rem] items-center sm:flex ${
        reverse ? "flex-row-reverse" : ""
      }`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-black/26" />
      <span className="mx-2 h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-black/26" />
    </div>
  );
}

function ShortRule({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`hidden w-16 items-center sm:flex ${
        reverse ? "flex-row-reverse" : ""
      }`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-black/26" />
      <span className="mx-1.5 h-0 w-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-black/26" />
    </div>
  );
}
