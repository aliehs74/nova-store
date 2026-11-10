# NOVA Store architecture

## Scope and current stage

This is the public Next.js storefront, not the admin application. P1 establishes
the source structure only. Translation delivery belongs to P2, styling/theme to
P3, and FakeStoreAPI integration to P4. Do not add unused modules in anticipation.

## Folder responsibilities

| Location | Responsibility | Create when |
| --- | --- | --- |
| `src/app/[locale]` | Locale layouts, route entry points and route-owned data | P1 |
| `src/app/globals.css` | Minimal document resets; global styling later | P1 |
| `src/i18n.ts` | Supported locales and default locale; next-intl setup later | P1/P2 |
| `src/api` | Shared Axios instance and transport configuration | API step |
| `src/requests` | Endpoint request functions | API step |
| `src/dictionary` | Persian and English next-intl messages | Localization step |
| `src/context` | Theme and truly global React contexts | Theme step |
| `src/storage` | Zustand cart state and persistence | Cart step |
| `src/types/enums` | Shared types, interfaces and justified enums | First shared contract |
| `src/utils` | Pure UI-independent transformations and formatters | First shared helper |
| `src/shared` | Cross-cutting adapters; do not duplicate atomic UI | First actual use |
| `src/assets/fonts` | Imported local font files | Font step |
| `src/assets/icons` | Imported icon assets | First icon |
| `src/assets/images` | Imported image assets | First image |
| `src/modals` | Modal-specific modules when needed | First modal |
| `src/validations` | Shared Yup form schemas | First validated form |
| `src/proxy.ts` | Locale entry redirect; next-intl middleware later | P1/P2 |

Public URL assets belong in `public`. Framework configuration stays at the root.
Because the application uses `src/app`, Next.js Proxy belongs at `src/proxy.ts`
alongside `app`, following the installed Next.js convention. Do not create both
root and src Proxy files.

## Component conventions

Use Atomic Design under `src/components`: atoms for primitives, molecules for
small composed controls, organisms for complete sections, templates for page
composition. Routes compose templates and own route concerns. Lower atomic
levels never import higher levels. Create each level only when it has real code.

Use camelCase folders and PascalCase component names. Public entry: `index.tsx`;
props: `index.types.ts`; styled-components: `index.styles.ts`. Add local hooks and
utilities only for actual responsibilities. Primary runtime exports are default;
types remain named. Use `@/` between directories and `./` within a module.

P1's home template is intentionally an empty semantic main region. Product UI,
placeholder copy, API calls, colors and extra components belong to later parts.

## State boundaries

Server Components own initial API reads. Axios/request modules own transport.
Zustand owns cart state; Context owns theme; local interaction state uses
useState. Formik/Yup are used when an actual validated form is introduced.

## Routes

Supported locale prefixes are `fa` and `en`; Persian is the default. Unsupported
locales return 404. Locale page shells are generated for both languages.
The root entry redirects to the default locale. Central route constants/builders
live in `src/shared/routes.ts`; only implemented routes are exposed.
