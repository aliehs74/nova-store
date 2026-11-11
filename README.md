# NOVA Store

Public Next.js storefront with Persian/English routing and light/dark themes.

## API configuration

Copy `.env.example` to `.env.local`, then run `npm install` and `npm run dev`.
`FAKESTORE_API_BASE_URL` is server-only and must be an absolute HTTP(S) URL.
The sample points to `https://fakestoreapi.com`. Restart dev after changing it.
Use `npm run lint`, `npx tsc --noEmit`, and `npm run build` for verification.

`src/api` owns one Axios instance with a ten-second timeout. Request functions
in `src/requests/products` validate unknown responses and return a discriminated
success/error result. Raw transport errors are never sent to the browser.
The server loader starts product/category reads in parallel at request time
under Suspense; no network call is required during build. The client receives
validated initial props, without importing Axios or the environment variable.
Empty results and failures remain distinct; category failure does not discard
successful products. Reload the page to retry. No automatic retries or cache
library are introduced.

FakeStoreAPI is a mock service: writes are not persistent and real page-number
pagination is unavailable. Later product pagination will use the received array.
API product titles remain backend content, not fabricated Persian translations.

### Price convention

The observed response has a numeric `price` but no currency field. NOVA explicitly
uses USD as a display convention in `src/shared/price.ts`, not as a verified API
currency contract. Prices display two decimal places, comma grouping and dot
decimal; digits follow the UI locale. No conversion to toman or exchange-rate
assumption occurs. JSON numbers already have JavaScript precision limitations;
this presentation helper is not an authoritative checkout/accounting engine.

The basic product list in P4 verifies data delivery; product cards, filters and
search behavior remain separate later parts.

