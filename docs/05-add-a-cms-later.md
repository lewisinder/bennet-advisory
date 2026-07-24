# TinaCMS and Cloudflare Hosting Decision

TinaCMS is part of the intended Bennett Advisory delivery, but it should be added
after the Astro design and content structure are approved. Keeping it as a separate
phase makes visual review simpler and prevents CMS scaffolding from driving the
page architecture.

## Decision required before implementation

The requested target is Cloudflare Pages. As of 24 July 2026, the official TinaCMS
Astro guidance says its visual editor uses an on-demand
`/tina-island/[name]` endpoint. Even when the public pages are statically rendered,
that endpoint needs an Astro SSR adapter. Tina's current Cloudflare deployment
guidance therefore directs the Astro starter to Cloudflare Workers rather than
Pages.

Choose one of these before the CMS phase:

1. **Full Tina visual editing (recommended):** keep Astro and deploy the site to
   Cloudflare Workers with static assets plus the small on-demand editing route.
   The public site can remain mostly prerendered.
2. **Cloudflare Pages is non-negotiable:** run a focused proof of concept before
   migrating content. Confirm exactly which Tina editing experience is required
   and whether a static/admin-only approach is acceptable. Do not assume Astro
   click-to-edit will work on Pages.

Official references to re-check immediately before implementation:

- https://tina.io/docs/frameworks/astro
- https://tina.io/docs/contextual-editing/astro
- https://tina.io/docs/tinacloud/deployment-options/cloudflare-pages
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

These products change quickly; use current official documentation rather than
copying old setup commands.

## Content model to prepare during the Astro build

Keep the first pass CMS-ready without installing Tina:

- One site-settings record for business name, contact details, address, hours,
  primary CTA, social links, approved badges, and SEO defaults.
- One record each for Home, About, and Contact.
- A repeatable services list rendered on Home, not separate service routes.
- A repeatable team list for Melanie Bennett, Sarah Clay, Glenn Schussler, and
  Helen Gleeson.
- Optional repeatable FAQs for Contact only when answers are approved.
- Image fields that preserve alt text, focal-point/crop notes, and approval status.
- Separate SEO title and description fields for each indexable page.
- No editable credentials, form keys, Tina tokens, DNS details, or other secrets.

## CMS implementation phase

After the hosting decision:

1. Re-read the current official Tina Astro integration guide and initialise Tina
   in this existing project.
2. Define collections that match the approved content model. Back them with
   Markdown, MDX, or JSON under a clearly named `content/` directory.
3. Re-point the Astro data layer to generated Tina queries/types without changing
   the approved visual components.
4. If using visual editing, wrap every editable static region as required by the
   current `<TinaIsland>` guidance and keep the on-demand island route working.
5. Keep the CMS admin out of the sitemap and search index.
6. Create the TinaCloud project against the GitHub repository and configure the
   current required client ID, read-only token, and branch variables in every
   build environment. Never commit tokens or private workbook data.
7. Test local editing, hosted authentication, saving to a non-production branch,
   the resulting GitHub commit, preview deployment, and production rebuild.
8. Run `tinacms audit` (or its current documented equivalent), `npm run check`,
   and `npm run build`.

## Completion criteria

- An authorised editor can sign in at `/admin/`.
- All intended fields can be edited without exposing implementation-only fields.
- Saving produces a reviewable GitHub commit on the intended branch.
- Preview and production builds succeed with no credentials in the repository.
- Home, About, and Contact still render correctly with JavaScript disabled outside
  the CMS editing experience.
- The CMS does not create service-detail pages or other routes outside the agreed
  site scope.
