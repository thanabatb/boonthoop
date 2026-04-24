# Family Home Landing Page — UI Implementation Brief

## Goal
Create a simple family home landing page where users first choose a family member before entering that member’s personal space.

This page should feel like a calm onboarding / entry screen, not a dashboard.

---

## Core UX Concept
**Choose member first → then access personalized content.**

The landing page should reduce complexity by showing only:

1. Family name
2. Welcome message
3. Family member cards
4. Optional footer message

Avoid showing calendars, chores, groceries, notifications, or dashboard widgets on this page.

---

## Page Structure

```txt
--------------------------------------------------
Top Bar
--------------------------------------------------
Family Name                                  Icon



                Welcome Home
        Choose a family member to continue


        [ Member ] [ Member ] [ Member ] [ Member ]


                  Home is better together.
--------------------------------------------------
```

---

## Layout Requirements

### 1. Top Bar

**Purpose:** Identify the family space.

**Elements:**
- Family name, e.g. `The Miller Family`
- Optional small icon on the right, such as:
  - home icon
  - family icon
  - settings icon

**Style:**
- Minimal
- No heavy navigation
- Height: around `72px`
- Padding: `24px–40px`
- Bottom border: subtle `1px solid #EAE7E2`

---

### 2. Hero Section

**Purpose:** Welcome users and tell them what to do.

**Content:**

```txt
Welcome Home
Choose a family member to continue
```

**Style:**
- Center aligned
- Large whitespace
- Headline should be the strongest visual element
- Subtext should be calm and secondary

**Suggested typography:**
- Headline: `48px`, weight `700`
- Subtext: `18px–20px`, weight `400`

---

### 3. Family Member Cards

**Purpose:** Let users choose who they are.

Each card should contain:

```txt
Avatar
Name
Role
```

Example:

```txt
[Avatar]
Sarah
Mom
```

**Card behavior:**
- Entire card is clickable
- Hover state: slightly stronger shadow or subtle lift
- Active/focus state: visible border or ring

**Card style:**
- Width: `220px–260px`
- Min height: `300px`
- Border radius: `20px–24px`
- Background: white or off-white
- Border: `1px solid #E8E3DC`
- Shadow: very subtle

**Avatar style:**
- Circular image
- Size: `120px–150px`
- Centered
- Soft neutral background behind avatar

---

### 4. Footer Message

**Purpose:** Add warmth without adding clutter.

Example:

```txt
Home is better together.
```

Optional icon:
- small home icon
- small heart icon

Keep this area very subtle.

---

## Visual Style

### Mood
- Minimal
- Warm
- Calm
- Family-friendly
- Normal everyday app, not playful or childish

### Color Palette

```css
--background: #FAF7F3;
--surface: #FFFFFF;
--text-primary: #1F1F1F;
--text-secondary: #6B665F;
--border: #E8E3DC;
--accent: #5F7A61;
--accent-soft: #EEF3EC;
```

### Typography
Use a clean sans-serif font:

```css
font-family: Inter, Noto Sans, system-ui, sans-serif;
```

---

## Responsive Behavior

### Desktop
- Member cards appear in one centered row
- Max content width: around `1120px`
- Use generous spacing

### Tablet
- Cards can wrap into 2 columns

### Mobile
- Cards stack vertically
- Header remains simple
- Hero text becomes smaller

Suggested mobile typography:

```css
Headline: 36px
Subtext: 16px
```

---

## Example Data

```js
const familyMembers = [
  {
    id: "mark",
    name: "Mark",
    role: "Dad",
    avatar: "/avatars/mark.png"
  },
  {
    id: "sarah",
    name: "Sarah",
    role: "Mom",
    avatar: "/avatars/sarah.png"
  },
  {
    id: "emma",
    name: "Emma",
    role: "Daughter",
    avatar: "/avatars/emma.png"
  },
  {
    id: "liam",
    name: "Liam",
    role: "Son",
    avatar: "/avatars/liam.png"
  }
];
```

---

## Interaction Requirements

### On Card Click
When a user clicks a member card:

```txt
Navigate to /member/:id
```

Example:

```txt
/member/sarah
```

or store selected member in state/local storage before moving to dashboard.

### Optional Microinteraction
- Card moves up `-4px` on hover
- Shadow becomes slightly stronger
- Cursor becomes pointer

---

## Accessibility Requirements

- Each member card should be a button or link
- Use meaningful alt text for avatars
- Keyboard focus should be visible
- Text contrast must remain readable
- Cards should be selectable with keyboard navigation

Example alt text:

```txt
Sarah, Mom
```

---

## Component Breakdown

### Components

```txt
FamilyLandingPage
├── TopBar
├── HeroSection
├── MemberCardGrid
│   └── MemberCard
└── FooterMessage
```

---

## Suggested React Component Structure

```txt
src/
├── pages/
│   └── FamilyLandingPage.tsx
├── components/
│   ├── TopBar.tsx
│   ├── HeroSection.tsx
│   ├── MemberCard.tsx
│   └── FooterMessage.tsx
└── data/
    └── familyMembers.ts
```

---

## CSS Direction

```css
.page {
  min-height: 100vh;
  background: var(--background);
  color: var(--text-primary);
}

.topbar {
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}

.hero {
  text-align: center;
  padding: 120px 24px 56px;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 32px;
}

.member-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(31, 31, 31, 0.08);
}
```

---

## UI Generator Prompt

Use this prompt if generating the UI with an AI design tool:

```txt
Create a minimal modern landing page UI for a family app. The page should be simple and calm, not a dashboard. The main action is choosing a family member before entering the app.

Use a warm off-white background, clean typography, soft rounded cards, subtle borders, and generous whitespace. At the top, show a minimal header with the family name “The Miller Family” and a small family/home icon on the right.

In the center, show a hero section with the headline “Welcome Home” and subtext “Choose a family member to continue”. Below it, display four large family member cards in a centered row. Each card includes a circular avatar, the member name, and a small role label: Mark / Dad, Sarah / Mom, Emma / Daughter, Liam / Son.

The design should feel like Apple onboarding, Notion minimal UI, and a calm lifestyle app. No calendar, no chores, no groceries, no dashboard widgets. Focus only on the entry experience. Make it responsive, with cards stacking on mobile.
```

---

## Definition of Done

The implementation is complete when:

- The page feels simple and uncluttered
- The user clearly understands they need to choose a family member
- Each family member card is clickable
- The UI works on desktop and mobile
- There are no dashboard widgets on this landing page
- The page visually communicates warmth, clarity, and calmness
