# Ship Runbook - GitHub to Cloudflare

Run this only after the Home, About, and Contact pages are approved and the
TinaCMS hosting decision in `05-add-a-cms-later.md` has been made.

## 0. Preconditions

- The source repository is the existing public repository
  `https://github.com/lewisinder/bennet-advisory`.
- The private workbook PDF and Markdown transcript are outside the repository.
- Repository history contains no credentials or private operational details.
- The canonical production URL has been confirmed as either the apex or `www`
  form of `bennettadvisory.co.nz`.
- The privacy-policy decision and wording have been resolved.
- Rights/status have been confirmed for every photograph and accreditation badge.
- TinaCMS editing works locally and on a non-production branch.

## 1. GitHub

The GitHub repository is the source of truth for code and editable content.

```bash
git status
git add <reviewed-files-only>
git commit -m "Prepare Bennett Advisory production release"
git push
```

Review the pushed commit on GitHub before connecting the production host. Do not
blindly use `git add -A` when private files are anywhere near the repository.

The existing GitHub Pages workflow can remain a static, noindex design preview
before Tina is added. After Tina integration, prefer Cloudflare branch previews;
GitHub Pages cannot host Tina's on-demand Astro editing endpoint.

## 2. Select the approved Cloudflare path

### Path A - Cloudflare Workers for full Tina visual editing

Use the current official Tina Astro + Cloudflare Workers instructions. The public
pages may remain prerendered, but the Tina island endpoint requires the Cloudflare
Astro adapter and request-time execution.

Before connecting production:

- Replace the template's static-only `wrangler.toml` with the configuration
  generated or required by the current adapter.
- Confirm `npm run build` builds Tina and Astro in the documented order.
- Configure the documented deploy command in Cloudflare Workers Builds.
- Add the TinaCloud client ID, read-only token, and branch variables in both
  preview and production build environments.

### Path B - Cloudflare Pages after a successful static Tina proof

Only use this path if the proof in `05-add-a-cms-later.md` confirms the required
editing experience works without Tina's on-demand Astro route.

In Cloudflare: **Workers & Pages -> Create application -> Pages -> Import an
existing Git repository**.

- Production branch: `main`
- Root directory: leave blank if this folder is the repository root; otherwise
  `website-in-a-day-template`
- Build command: `npm run build`
- Build output directory: `dist`
- Preview branches: enabled

Cloudflare Pages will build every pushed commit and create branch/PR previews.

## 3. Environment variables and secrets

Set the current Tina variables exactly as documented by Tina when the integration
is implemented. Common variables include a public Tina client ID, `TINA_TOKEN`,
and a branch variable, but names must match `tina/config.ts`.

Also set any contact-form configuration required by the chosen form provider.
Never put Tina tokens, DNS credentials, domain credentials, or private workbook
content in source files, client-side fields, committed `.env` files, or build logs.

## 4. Domain and SEO

- Set the same canonical URL in `astro.config.mjs` and `src/data/site.ts`.
- Attach the apex and/or `www` custom domain in Cloudflare, then redirect the
  non-canonical form to the canonical one.
- Confirm HTTPS and canonical tags on every public page.
- Confirm `/robots.txt` and `/sitemap-index.xml` use the production domain.
- Keep `/admin/`, `/design-system/`, `/thank-you/`, and preview deployments out of
  search indexes and the sitemap where appropriate.

## 5. Production acceptance

On the deployed site:

1. Open Home, About, Contact, 404, thank-you, and the approved privacy route.
2. Test desktop and mobile navigation.
3. Submit a test enquiry and confirm it reaches the intended inbox.
4. Sign in to `/admin/`, edit a harmless test field on a non-production branch,
   save it, and confirm the GitHub commit and preview rebuild.
5. Confirm there are no console errors, missing images, broken links, or horizontal
   overflow.
6. Run the full `04-launch-checklist.md`.

## 6. Handover

Record:

- GitHub repository and production branch.
- Cloudflare project and whether it uses Pages or Workers.
- Canonical domain.
- TinaCloud project owner/editors and the content publishing workflow.
- Contact-form destination and test date.
- Any outstanding content approvals.

Do not record passwords or tokens in this repository.
