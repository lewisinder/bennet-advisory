# Bennett Advisory production handover

## Delivery decisions

- Static launch approved by the client on 11 November 2026. TinaCMS is deferred.
- GitHub source: https://github.com/lewisinder/bennet-advisory, branch `main`.
- Cloudflare Worker: `bennett-advisory`, in Melanie's Cloudflare account.
- Canonical production URL: https://bennettadvisory.co.nz
- Review URL: https://bennett-advisory.bennett-advisory.workers.dev
- Domain uses the new account's `jaxson.ns.cloudflare.com` and
  `lucy.ns.cloudflare.com` nameservers and is active in that account.

## Current launch status (12 November 2026)

The production site is live on the apex domain. The imported website A/AAAA
records were removed, and the Worker now owns the apex and www custom domains.
HTTPS works, www and HTTP requests redirect to the canonical HTTPS address while
preserving paths and queries, and public pages, robots.txt, sitemaps and the
custom 404 have been checked. The production homepage is indexable and includes
GA4. The temporary hostname receives `X-Robots-Tag: noindex, nofollow`.

Browser checks passed on Home, About and Contact at 1440px and 375px widths:
no horizontal overflow, no broken images, no page or console errors, and mobile
menu navigation works. The production browser loaded the configured GA4 tag.

Public DNS checks confirm that the Microsoft 365 MX, SPF, verification TXT and
autodiscover records remain available. Email inbox delivery still needs a final
client confirmation; public DNS checks do not prove email delivery.

## Enquiry form

Web3Forms delivers enquiries to the email associated with its access key.
Delivery was confirmed using the developer's test key. Melanie's original key
has been restored; delivery to her inbox still needs confirmation.

Set `PUBLIC_WEB3FORMS_ACCESS_KEY` at build time. Local configuration is in an
ignored `.env.local`; use `.env.example` to set up another checkout. For temporary
testing only, `PUBLIC_WEB3FORMS_TEST_ACCESS_KEY` overrides the recipient when
`DEPLOY_TARGET=cloudflare-preview`. No access keys or account credentials belong
in this handover file.

## Builds and backups

GitHub stores the source and version history. The GitHub Pages workflow publishes
a separate noindex preview, not the production Worker. Cloudflare keeps deployment
versions for rollback. Automatic GitHub-to-Cloudflare builds are not connected yet.

Current manual production release:

```sh
npm ci
npm run check
npm run build
npm run deploy
```

The build must receive the production Web3Forms key. GA4 is enabled only on
`bennettadvisory.co.nz`, with measurement ID configured in `src/data/site.ts`.
Confirm receipt through GA4 Realtime after launch.

## Production SEO and navigation review

See `08-production-readiness.md` for the 12 November 2026 audit and outstanding
account-side confirmations. The shared header includes the approved Connectworks
Client portal link, kept separate from the three internal navigation routes.

Builds now use Astro 7.4.1 with Node 22.22.0 or newer. The framework version is
pinned to the tested release; the dependency lockfile includes security fixes.
Keep `compressHTML: true` to preserve the approved inline text spacing.
