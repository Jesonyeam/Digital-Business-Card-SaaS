# Digital Business Card — Mobile App

The Expo (React Native) app for the Digital Business Card SaaS. Runs on iOS, Android, and the web from a single codebase.

Built with [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/), [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing), TypeScript (strict), and React Native Web.

## Development

Install dependencies from the **repo root** (this is an npm workspaces monorepo):

```bash
npm install
```

Then start the dev server (from the repo root or this directory):

```bash
npm run mobile        # from repo root
npm start             # from apps/mobile
```

In the Expo dev server output:

- Press `a` — open on Android emulator/device
- Press `i` — open on iOS simulator (macOS only)
- Press `w` — open in the browser
- Scan the QR code with [Expo Go](https://expo.dev/go) on a physical device

## Project structure

```
src/
  app/              # Screens (file-based routes)
    _layout.tsx     # Root layout — theming + tab navigator
    index.tsx       # "My Card" tab — card preview
    share.tsx       # "Share" tab — QR sharing (placeholder)
  components/       # Reusable UI components
  constants/        # Theme tokens (colors, spacing, fonts) and sample data
  hooks/            # Shared hooks (color scheme, theme)
  types/            # Shared TypeScript types
assets/             # App icons, splash, images
app.json            # Expo app config
```

## Scripts

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
```

## Roadmap

- [ ] Card editing (profile fields, avatar, links)
- [ ] Real QR code generation for sharing
- [ ] Auth + backend sync with the SaaS API
- [ ] Card themes and customization
- [ ] Contact exchange / captured leads
