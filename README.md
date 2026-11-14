# NOVA Store

## Search metadata

Set `SITE_URL` to the deployed storefront origin before building for production. The development fallback is `http://localhost:3000`; it must not be used as the published canonical origin. Home pages provide localized titles, descriptions, Open Graph metadata, self-referencing canonical URLs and reciprocal Persian/English hreflang alternates. `/sitemap.xml` lists the two public home pages with language alternates. `/robots.txt` allows crawling and points to that sitemap. Cart pages retain `noindex` and are omitted from the sitemap; crawling remains allowed so search engines can read their noindex directive.

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

## Product discovery

The browser filters the received products by title and category, then sorts the
results and paginates them in groups of six. FakeStoreAPI does not provide real
page-number pagination. Price sorting uses the API price; title sorting uses
locale-aware, case-insensitive numeric text comparison. Search is debounced by
300 ms. Search, category and sort changes return to page one. Clearing filters
also clears the header search field and restores the default order.

## Shopping cart

`src/storage/cart` creates a Zustand store per `CartProvider` instance. Adding an
existing product increases its quantity; the header counts the sum of quantities.
Cards announce successful additions with a short localized status message.

The `nova-cart` localStorage entry uses schema version 1 and persists only product
ID, title, price, category, image and quantity. Stored data is validated before it
enters the store. Malformed JSON, incompatible versions, duplicate IDs and invalid
values reset the saved cart. Methods and hydration flags are never persisted.

Server rendering starts with an empty cart. The browser rehydrates after mounting,
then enables add buttons, so early interactions cannot overwrite an unread cart.
If localStorage is unavailable or full, the cart still works in memory, but changes
cannot be guaranteed to survive a refresh. Cart prices are display data, not an
authoritative checkout total. The localized cart page supports quantity changes,
individual removal, clearing all items and an empty state. Decreasing a quantity
on the cart page stops at one; removal is a separate action. Line totals and the
overall total are calculated in integer USD cents before display. Checkout is a
disabled visual control: online payment and order submission remain out of scope.

