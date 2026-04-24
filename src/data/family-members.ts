export type FamilyMember = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  portrait: string;
  spaceUrl: string;
  glow: string;
  tagline: string;
  intro: string;
  summary: string;
};

export const familyName = "The Boonthoop Family";

export const familyMembers: FamilyMember[] = [
  {
    id: "dad",
    name: "Soodyod",
    role: "Father",
    avatar: "/avatars/dad.jpg",
    portrait: "/avatars/dad.jpg",
    spaceUrl: "#",
    glow: "rgba(204, 174, 141, 0.38)",
    tagline: "Steady presence, quiet support, and the center of the home.",
    intro:
      "Your space is ready. Start with what matters most and leave the rest outside.",
    summary:
      "A calm start and a strong home base go a long way.",
  },
  {
    id: "mom",
    name: "Anongnat",
    role: "Mother",
    avatar: "/avatars/mom.jpg",
    portrait: "/avatars/mom.jpg",
    spaceUrl: "#",
    glow: "rgba(214, 178, 170, 0.4)",
    tagline: "Warm routines, thoughtful care, and the heart of the house.",
    intro:
      "Step into a space that feels calm and prepared, with everything arranged around your flow.",
    summary:
      "A little clarity at the door makes the whole day feel easier.",
  },
  {
    id: "me",
    name: "Thanabat",
    role: "Me",
    avatar: "/avatars/me.jpeg",
    portrait: "/avatars/me.jpeg",
    spaceUrl: "https://thanabat-portfolio.vercel.app/",
    glow: "rgba(166, 188, 206, 0.42)",
    tagline: "My own Journey, my own rhythm, and my own pace.",
    intro:
      "This is your personal entry point. Start here and move into the rest of the home from a place that feels like yours.",
    summary:
      "A good home screen should feel personal from the very first click.",
  },
  {
    id: "brother",
    name: "Sedthee",
    role: "Brother",
    avatar: "/avatars/brother.jpg",
    portrait: "/avatars/brother.jpg",
    spaceUrl: "#",
    glow: "rgba(163, 190, 171, 0.42)",
    tagline: "Playful momentum, small wins, and favorite routines.",
    intro:
      "Everything here is designed to feel approachable from the first click, with enough warmth to feel like home.",
    summary:
      "Simple entry points keep everyday family moments light and easy.",
  },
  {
    id: "sister",
    name: "Tanyong",
    role: "Sister",
    avatar: "/avatars/sister.jpg",
    portrait: "/avatars/sister.jpg",
    spaceUrl: "#",
    glow: "rgba(226, 198, 150, 0.42)",
    tagline: "Curious energy, bright ideas, and a warm presence at home.",
    intro:
      "Your page opens with a light touch so it feels welcoming, simple, and easy to move through.",
    summary:
      "The best rooms make it easy to be yourself the moment you arrive.",
  },
];

export function getFamilyMember(id: string) {
  return familyMembers.find((member) => member.id === id);
}
