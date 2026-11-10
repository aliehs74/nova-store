# NOVA Store - Project Instructions

## Scope

This repository contains only the **NOVA Store** customer-facing storefront described in `NOVA_Frontend_Technical_Challenge_FA.pdf`.

- Build the storefront with Next.js.
- Do not implement, scaffold, or add dependencies for NOVA Admin.
- Do not add admin login, product management, user management, admin tables, or admin routes.
- Customer authentication, checkout, payment, order submission, inventory, advanced roles, and a custom backend are out of scope.
- The storefront is public and does not require login.

## Required stack

- Next.js with App Router
- React functional components only
- TypeScript in strict, type-safe style; avoid `any`
- `next-intl` for Persian/English localization and locale-based routing
- `styled-components` with correct SSR integration
- Zustand for global storefront state, especially the shopping cart
- Context API for theme and other truly global context
- `useState` for local component state
- Axios through one shared Axios instance
- Formik and Yup only when the storefront needs a form and validation
- ESLint

## Visual direction

- Create a modern, minimal storefront with generous spacing, rounded cards, and subtle shadows.
- Use dark navy for the header, primary text, and important elements.
- Use orange for primary actions, the cart indicator, and emphasis.
- Use a white or very light warm-gray background in light mode.
- Dark mode must use dark gray/navy surfaces with readable contrast.
- Use a readable Persian font that also handles Latin text and numbers well.
- Brand identity consists of the NOVA wordmark and an orange bag/cart symbol.
- Follow the supplied reference images for hierarchy and UX, but do not make a pixel-for-pixel copy.

## Direction, language, and theme

- Support both Persian and English.
- Persian pages must use RTL; English pages must use LTR.
- Direction must be correct at page and component level.
- All fixed UI strings must come from locale dictionaries. Do not hard-code Persian or English UI copy in JSX.
- Provide a visible language switcher.
- Provide Light and Dark themes with a visible theme switcher.
- Theme styling must remain consistent and accessible in both modes.

## Responsive requirements

- Design Mobile First.
- Mobile target: approximately 360-767 px. Use a compact menu, accessible search, one- or two-column product cards as space permits, touch-friendly controls, and a visible cart summary.
- Tablet target: approximately 768-1023 px. Use a fluid multi-column layout with reduced spacing.
- Desktop target: 1024 px and wider. Use the full header, multi-column product grid, wide hero, and a detailed cart summary.
- Intermediate widths must not produce broken layouts, horizontal scrolling, overlap, or clipped content.
- The storefront must work on mobile, tablet, and desktop. Admin-specific desktop requirements do not apply.

## Application routes and structure

- Use locale-based App Router pages below `src/app/[locale]/`.
- Keep routes centralized and clearly named.
- Place `robots.ts` and `sitemap.ts` in the correct App Router location.
- Keep global styles in the appropriate app-level location.
- Use this architecture as the baseline and extend it only when justified:

```text
src/
├── api/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       └── page.tsx
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
├── context/
├── dictionary/
├── modals/
├── requests/
├── shared/
├── storage/
├── types/
│   └── enums/
├── utils/
├── validations/
└── i18n.ts

proxy.ts
```

- `app/[locale]`: locale-aware layouts and pages.
- `dictionary`: translations used by `next-intl`.
- `api` and `requests`: shared Axios instance and API request functions.
- `storage`: Zustand stores, including the cart.
- `context`: theme and other global contexts.
- `shared`: reusable cross-page UI.
- `utils`: UI-independent helpers.
- `types/enums`: interfaces, types, and enums in dedicated files.
- `validations`: form validation schemas.
- `proxy.ts`: locale routing/request handling compatible with the installed Next.js version.

## Storefront landing page

The public landing page must include:

- Header with NOVA branding, search, category navigation/menu, language switcher, theme switcher, and cart icon with item-count badge.
- Hero banner with a clear image, concise headline, supporting copy, and a products call-to-action.
- Category chips/buttons such as digital, clothing, jewelry, and audio accessories, based on available API categories.
- Featured/products section with a responsive, consistent product-card grid.
- Product cards containing image, title, category, price, rating, and add-to-cart action.
- Search by product title.
- Category filtering.
- Sorting by at least price and title.
- Frontend pagination over the received API data, with a suggested page size of six products.
- Footer with guide/store information links; social links may be displayed.

## Shopping cart page

- Show each selected product with image and relevant details.
- Allow quantity increase and decrease; quantity must never go below one.
- Allow removing one product and clearing the entire cart.
- Calculate each line total and the overall total correctly.
- Show an appropriate empty-cart state and message.
- Persist non-sensitive cart state across refreshes using localStorage or an equivalent suitable method.
- Online payment, order submission, backend integration, and customer login are outside scope.

## API

Use FakeStoreAPI:

```text
Base URL: https://fakestoreapi.com
GET /products
GET /products/{id}
GET /products/categories
```

- Read the base URL from an environment variable.
- Include a non-secret `.env.example`.
- Send all API requests through the shared Axios instance.
- Define explicit TypeScript types for API responses.
- Handle errors centrally where practical.
- Never place secrets, passwords, or private keys in source code or public environment variables.
- FakeStoreAPI is a mock service and does not guarantee persistence.
- Its products endpoint does not provide real page-number pagination, so implement storefront pagination on the received dataset.
- Any optimistic UI decision or API limitation must be documented in README.

## State and behavior

- Keep server/API data, global client state, context state, and local UI state clearly separated.
- Zustand owns cart state and cart persistence.
- Context owns theme and similarly global contextual concerns.
- Local interaction state remains local unless it is genuinely shared.
- Every asynchronous data section must provide intentional loading, error, success, and empty states.
- Reusable components belong in shared locations; avoid duplicated UI and logic.

## SEO and metadata

- Add appropriate metadata for the home and other indexable public pages.
- Configure `metadataBase`, title, description, and Open Graph metadata when suitable.
- Implement `app/robots.ts` with an intentional crawler policy.
- Implement `app/sitemap.ts` for public indexable routes.
- Use semantic HTML and correct heading hierarchy.
- Equivalent Persian and English pages must have language-appropriate metadata.

## Code quality rules

- Use TypeScript throughout and prefer precise types over assertions.
- Do not use class components.
- Separate UI from API, storage, validation, and business logic.
- Keep shared components reusable and focused.
- Define enums independently when an enum is appropriate.
- Keep route definitions centralized.
- Use clear naming and single-purpose modules.
- Avoid repetition and dead code.
- Do not hard-code fixed UI translations in JSX.
- Run lint, TypeScript checks, and production build before considering a step complete.
- Preserve accessibility: keyboard operation, visible focus, labels, alt text, semantic controls, and sufficient color contrast.

## Documentation and delivery

- Keep a standalone README for NOVA Store with prerequisites, installation, environment setup, development, linting, and production build instructions.
- Explain architecture, state management, API integration, FakeStoreAPI limitations, and meaningful implementation decisions.
- Keep `.env.example` free of secrets.
- Maintain meaningful Git history when Git is in use.
- Images or a short responsive demo video are optional, not required.

## Evaluation priorities

Optimize decisions for these criteria:

1. Architecture and folder organization.
2. Command of React and Next.js.
3. TypeScript and type safety.
4. State management.
5. API integration through the shared Axios instance.
6. Forms and validation where applicable.
7. Persian/English localization and themes.
8. Responsive UI and overall UX quality.
9. Clean code and error handling.
10. Documentation and delivery quality.

## Working boundary

Before implementing any requested step, confirm it belongs to NOVA Store. If a request comes from an admin-only section of the source PDF, do not implement it unless the user explicitly changes the project scope.
