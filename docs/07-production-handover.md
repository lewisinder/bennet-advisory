# Bennett Advisory production handover

## Delivery decisions

- Static launch approved by the client on 11 November 2026. TinaCMS is deferred.
- GitHub source: https://github.com/lewisinder/bennet-advisory, branch `main`.
- Cloudflare Worker: `bennett-advisory`, in Melanie's Cloudflare account.
- Intended canonical URL: https://bennettadvisory.co.nz
- Review URL: https://bennett-advisory.bennett-advisory.workers.dev
- Domain uses the new account's `jaxson.ns.cloudflare.com` and
  `lucy.ns.cloudflare.com` nameservers and is active in that account.

## Current launch status (12 November 2026)

The production build is uploaded. Attaching the apex and www custom domains is
blocked by Cloudflare error 100117: imported, externally managed A/AAAA records
must be removed for these two hostnames before the Worker can own them.
Keep email-related MX, TXT and CNAME records. Do not remove those for this change.

After resolving the DNS conflict, run the deployment and verify both custom
domains, their certificates, the www redirect, public pages, form and SEO files.
The temporary hostname receives an `X-Robots-Tag: noindex, nofollow` header.

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
