export type FamilyMember = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  glow: string;
  tagline: string;
  intro: string;
  summary: string;
};

export const familyName = "The Boonthoop Family";

export const familyMembers: FamilyMember[] = [
  {
    id: "mark",
    name: "Mark",
    role: "Dad",
    avatar: "/avatars/mark.svg",
    glow: "rgba(204, 174, 141, 0.38)",
    tagline: "Steady rhythms, weekend coffee, morning check-ins.",
    intro:
      "Your corner of the house is ready. Start with the things that matter most and leave the noise outside.",
    summary:
      "A quiet start, a clear plan, and a warm home base go a long way.",
  },
  {
    id: "sarah",
    name: "Sarah",
    role: "Mom",
    avatar: "/avatars/sarah.svg",
    glow: "rgba(214, 178, 170, 0.4)",
    tagline: "Thoughtful lists, soft routines, the heart of the house.",
    intro:
      "Step into a space that feels calm and prepared, with everything arranged around your flow.",
    summary:
      "A little clarity at the door makes the whole day feel easier.",
  },
  {
    id: "emma",
    name: "Emma",
    role: "Daughter",
    avatar: "/avatars/emma.svg",
    glow: "rgba(226, 198, 150, 0.42)",
    tagline: "Curious energy, bright ideas, and after-school stories.",
    intro:
      "Your page opens with a light touch so it feels welcoming, simple, and easy to move through.",
    summary:
      "The best rooms make it easy to be yourself the moment you arrive.",
  },
  {
    id: "liam",
    name: "Liam",
    role: "Son",
    avatar: "/avatars/liam.svg",
    glow: "rgba(163, 190, 171, 0.42)",
    tagline: "Playful momentum, small wins, and favorite rituals.",
    intro:
      "Everything here is designed to feel approachable from the first click, with enough warmth to feel like home.",
    summary:
      "Simple entry points keep everyday family moments light and easy.",
  },
];

export function getFamilyMember(id: string) {
  return familyMembers.find((member) => member.id === id);
}
