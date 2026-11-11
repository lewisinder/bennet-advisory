# Production readiness review — 12 November 2026

## Changes

- Added the workbook-approved Connectworks Client portal to the shared desktop
  and mobile navigation. It opens in a new tab, with an external-link icon and
  accessible label. The homepage portal uses the same central URL.
- Preserved the existing font sizes. Detailed team names now use H3 within their
  H2 team section, with their previous appearance retained through a shared token.
- Added a specific Auckland contact-page title, refined the privacy description,
  and added absolute social-sharing images and image alternatives.
- Expanded AccountingService and WebSite structured data with the approved logo,
  photograph and business information. No reviews or ratings were invented.
- Restricted the sitemap to Home, About, Contact and Privacy. Production permits
  crawling; thank-you, design-system, missing pages and temporary hostnames remain
  noindex. Canonicals consistently point to the production domain.
- Improved shared text/button contrast and social-link accessible names. Font
  loading now uses early stylesheet discovery and preconnections.
- Added a native POST fallback to the enquiry form so personal information is
  not submitted in a URL if JavaScript is unavailable. Kept failure/retry feedback.
- Corrected the privacy disclosure to match the installed Google Analytics and
  Web3Forms services; removed the unused Meta Pixel claim.
- Updated Astro to the tested 7.4.1 release and patched dependencies. The npm
  dependency audit reports zero known vulnerabilities. Node 22.22.0+ is required.

## Metadata

| Page | Title | Description characters |
| --- | --- | --- |
| Home | Accounting, Tax & Trust Services Auckland \| Bennett Advisory | 151 |
| About | Auckland Accounting, Tax & Trust Team \| Bennett Advisory | 152 |
| Contact | Contact Our Auckland Team \| Bennett Advisory | 156 |
| Privacy | Privacy policy \| Bennett Advisory | 158 |

Description lengths follow this project's editorial convention, not a guarantee
of Google's displayed snippet length or ranking.

## Verification

- Production build and Astro checks pass without errors, warnings or hints.
- Home, About, Contact and Privacy each have one H1, logical heading levels,
  unique titles/descriptions, correct canonical/robots directives, structured
  data and accessible images.
- Browser checks at 1440px and 375px found no broken images, horizontal overflow,
  JavaScript page errors or axe WCAG A/AA/best-practice violations. These automated
  checks are not a complete accessibility certification.
- Additional layout checks cover 320, 598, 820, 821, 900 and 1024px. Header links
  do not collide. Mobile navigation, Escape-to-close and the portal link work.
- Public internal links and fragment targets resolve. The sitemap lists only the
  four indexable pages; robots.txt points to the production sitemap.
- Intercepted form tests cover success, provider failure, network failure and
  JavaScript-disabled POST submission. These tests do not send emails.
- A separate GitHub Pages build passes checks for subpath links and image assets,
  production canonicals, preview noindex/robots protection and disabled analytics.
- Worker routing checks cover canonical redirects, preserved query strings,
  utility noindex headers and missing-page status codes.
- The changes were deployed to the production Worker as version
  `892e1ff0-a8ba-48b4-ab8e-6f796cbcbb1e`. Live HTTP checks confirm public pages are
  indexable, utilities/temporary hostnames have noindex headers, unknown pages
  return 404, and canonical redirects preserve paths and queries. The portal,
  configured GA4 tag and production form configuration are present on the live site.

## Remaining account-side confirmations

- In Google Search Console, submit `https://bennettadvisory.co.nz/sitemap-index.xml`
  and inspect the public URLs. Crawl permission is verified, but Google's actual
  indexing and rankings are not controlled by the site.
- Confirm a real production enquiry reaches Melanie's inbox. Developer inbox
  delivery was confirmed previously; simulated tests cannot prove client delivery.
- Check GA4 Realtime in the property dashboard to confirm receipt. The production
  hostname gate and configured tag can be checked in the browser, not dashboard data.
- No Lighthouse/Core Web Vitals score is claimed by this review. Real-user field
  measurements need production traffic and time.
- No legacy-URL redirect list was available. If the old site's URL list or Search
  Console history becomes available, map any valuable removed URLs deliberately.
- Source backups remain on GitHub; automatic GitHub-to-Cloudflare production
  deployment is still separate setup. Do not assume a GitHub push alone publishes
  the production Worker.
