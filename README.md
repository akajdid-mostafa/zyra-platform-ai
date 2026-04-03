# Zyra

**Zyra** is a modern **AI chat dashboard** UI built with Next.js and Tailwind CSS. It presents a full conversational workspace: a welcoming home screen with suggested actions, a rich chat experience, organized spaces and new-chat flows, an archived-chat view, a media **gallery library**, **settings**, and **authentication** screens (sign in, sign up, forgot password). The layout is responsive and tuned for a polished product feel rather than a bare demo.

This repository is a **front-end template** you can wire to your own AI backend or use as a design reference for chat-centric products.

## Features

- **Home** — Centered prompt (“How can I help you today?”) with feature cards and quick entry into chat.
- **Chat** — Main conversational interface with layout suited to long sessions.
- **Spaces & new chat** — Navigation patterns for multiple conversations or contexts.
- **Archived chat** — Browse past threads.
- **Gallery library** — Visual library for assets or previews alongside chat workflows.
- **Settings** — App preferences and configuration entry points.
- **Auth** — Sign in, sign up, and forgot-password flows (UI; connect your own auth provider).

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Zustand](https://github.com/pmndrs/zustand) for client state
- [Headless UI](https://headlessui.com), [Swiper](https://swiperjs.com), and other UI helpers (see `package.json`)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # run production server (after build)
npm run lint    # ESLint
```

## Project layout (high level)

- `app/` — Next.js routes (`/`, `/chat`, `/gallery-library`, `/settings`, `/auth/*`, etc.)
- `templates/` — Page-level compositions
- `components/` — Shared UI and layout pieces
- `store/` — Zustand stores

---

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). For deployment, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) (e.g. [Vercel](https://vercel.com/new)).
