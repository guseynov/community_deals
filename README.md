# Community Deals

A small Next.js App Router demo that models a Digt-style community deals/catalog experience.

## Why this project exists

I built this project to practice a modern frontend stack relevant to product/e-commerce platforms:
Next.js App Router, React, TypeScript strict mode, Tailwind, typed API boundaries, Zod validation, and DTO-to-UI mapping.

## Current features

- Server-rendered deals page
- DummyJSON products API integration
- Zod validation for untrusted API data
- DTO-to-UI model mapping
- Route-level loading and error states
- Reusable DealCard component

## Architecture notes

- `app/deals/page.tsx` fetches initial catalog data on the server.
- `app/lib/deals.ts` owns API access, validation, and mapping.
- `app/types/deal.ts` defines DTO schemas and UI types.
- `DealCard` is intentionally presentational.

## Next steps

- Add category/search filters
- Add URL search params
- Add Zustand for shared client UI state
- Add TanStack Query for interactive client-side server state
- Add Formik + Zod admin form
- Add Jest/React Testing Library tests
