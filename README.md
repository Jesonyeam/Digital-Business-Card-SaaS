# Digital Business Card SaaS

A client project requested by Mr.Fido. The Digital Business Card SaaS.

## Repository structure

This is an npm workspaces monorepo:

```
apps/
  mobile/     # Expo (React Native) app — iOS, Android, and web
  web/        # (planned) marketing site / web dashboard
packages/     # (planned) shared code between apps
```

## Getting started

Requires Node.js 20+ and npm.

```bash
# Install all workspace dependencies from the repo root
npm install

# Start the mobile app (Expo dev server)
npm run mobile
```

From the Expo dev server you can:

- Press `a` to open on an Android emulator/device
- Press `i` to open on an iOS simulator (macOS only)
- Press `w` to open in the browser
- Scan the QR code with the [Expo Go](https://expo.dev/go) app on a physical device

Or start a platform directly:

```bash
npm run mobile:android
npm run mobile:ios
npm run mobile:web
```

## Quality checks

```bash
npm run lint        # ESLint across all workspaces
npm run typecheck   # TypeScript across all workspaces
```

See [apps/mobile/README.md](apps/mobile/README.md) for mobile-specific details.
