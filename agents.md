# Agent Instructions

You are acting as a practical senior frontend engineer and designer. Follow these
instructions for all work in this project.

## Project Context

> At kickoff, read `docs/01-project-brief.md` first, followed by the private
> agent transcript at `../Bennett_Advisory_Website_Workbook_Agent_Source.md`.
> Use the original PDF at `../Bennett_Advisory_Website_Workbook.docx.pdf` only
> when layout or transcript accuracy needs checking. Neither source file belongs
> in this repository. Never copy or expose credentials or other sensitive
> operational details from them.

- **Business:** Bennett Advisory Ltd — chartered-accountant-led accounting, tax,
  trust establishment, trustee, administration, and trust-review services.
- **Audience:** New Zealand small-to-medium business owners, individuals,
  families, trustees, and beneficiaries.
- **Real subject matter to lean on:** trust documentation and compliance,
  accurate administration, Xero accounting, tax structuring, team expertise, and
  French Bay / Titirangi context.
- **Primary action:** Get in touch / start a straightforward conversation.
- **Public page scope:** Home, About, and Contact. Services are homepage content,
  not separate index/detail routes. Keep 404 and thank-you as utility routes.
- **Visual reference:** `../Bennett Advisory Homepage Design/` is the approved
  design direction to translate into Astro. It is not a content source.
- **Delivery direction:** GitHub is the source repository. Cloudflare is the
  production host. Before implementing TinaCMS, resolve the current compatibility
  decision recorded in `docs/05-add-a-cms-later.md`.

Do not produce a generic SaaS, agency, or AI-template website. Avoid default-looking
hero sections, purple gradients, overused centered layouts, excessive rounded cards,
meaningless badges, fake metrics, emoji icons, and generic stock-style visuals.

## Skills

Two design skills are bundled in `.claude/skills/`:

- `ui-ux-pro-max`: use for design-system decisions, palettes, typography, layout,
  accessibility, and anti-pattern checks.
- `frontend-design`: use for distinctive visual direction, copy, and layout critique.

Use both for all substantial design work. Before starting, check whether each is
registered in the current agent environment. Use registered skills normally. If a
skill is not registered, read its bundled `.claude/skills/<name>/SKILL.md`
completely and follow it as the local workflow. Do not skip a bundled skill merely
because it was not auto-discovered. See `docs/06-install-skills.md` for discovery,
fallback, and installation instructions.

## How this template works (do not fight it)

- **`/design-system` is the contract.** Every page is assembled only from the tokens,
  type roles, and classes shown on that page. To restyle the site, change the tokens
  and font imports in `src/styles/global.css` and review on `/design-system` first.
  If a page needs something the system can't express, extend `global.css`, show the
  new piece on `/design-system`, then use it. Never add one-off inline styles or
  per-page CSS for things the system covers.
- **Content is data.** Business details live in `src/data/site.ts`; services in
  `src/data/services.ts`; FAQs in `src/data/faqs.ts`. Pages map over data; components
  render items. Never hardcode a phone number, service name, or address in markup.
- **`BaseLayout.astro` owns the `<head>`.** Pages pass `title` and `description`
  (unique per page, description 150–160 characters). Canonical URLs, Open Graph,
  robots, and LocalBusiness JSON-LD are automatic. Utility pages pass
  `robots="noindex, nofollow"`.
- **SEO settings:** the production domain is set in TWO places —
  `site` in `astro.config.mjs` and `url` in `src/data/site.ts`. Keep them identical.
  The sitemap and robots.txt generate themselves.
- **Internal links always go through `withBase()`** from `src/lib/base.ts`
  (`href={withBase("/contact/")}`), never a bare `href="/contact/"`. The GitHub
  Pages preview serves the site from a `/repo-name/` subpath and bare root links
  break there. Nav/CTA paths in `src/data/site.ts` stay plain (`/contact/`) —
  components apply `withBase()` when rendering.
- **GitHub Pages preview:** every push to `main` auto-deploys a preview to
  `https://<owner>.github.io/<repo>/` via `.github/workflows/deploy-pages.yml`
  (once Pages is enabled — see the kickoff prompt). Preview builds are
  automatically `noindex` with a blocking robots.txt; don't change that. Commit
  and push after each approved milestone so the preview stays current.
- **Icons** are Lucide SVGs via `@lucide/astro`, mapped by name in
  `ServiceCard.astro`. Never emoji.
- **Images:** put content images in `src/assets/` and render them with Astro's
  `<Image />` component (`astro:assets`) so they're compressed and sized
  automatically; always set meaningful `alt` text. `public/assets/` is only for the
  favicon, logo, and files that must keep their exact URL.

## Source hierarchy

Use sources in this order:

1. `../Bennett_Advisory_Website_Workbook_Agent_Source.md` for verbatim workbook
   wording and client inputs. Respect its labels: inherited current-site copy is
   not automatically approved, and `Example only` text is not a verified claim.
2. `docs/01-project-brief.md` for the build-ready synthesis and explicit scope.
3. `../Bennett Advisory Homepage Design/` for visual language, layout patterns,
   typography, colour, spacing, and motion only.
4. `https://bennettadvisory.co.nz/` for legacy content cross-checking only.

Never import claims, names, biographies, dates, links, or statistics from the
design prototype unless the private transcript or approved brief supports them.
In particular, the prototype's team names and several proof statistics are
placeholders. Do not use the AI-watermarked image
`20251207_122110_1__1_.jpg` in production.

## Build-day workflow

1. Read the brief and private agent transcript. Fill `src/data/site.ts` from
   approved facts, and model editable page content outside page markup so the later
   Tina migration stays clean.
2. Translate the existing Bennett prototype into the Astro design system. Preserve
   its restrained navy/teal/paper palette, Libre Baskerville + Plus Jakarta Sans +
   DM Mono type roles, square document/folder motifs, split photographic hero,
   rules, numbering, and editorial spacing. Record those decisions on
   `/design-system`; do not invent a competing visual direction.
3. Build Home, About, and Contact. Put service summaries on Home; do not create or
   retain public service index/detail pages. Keep 404 and thank-you as utilities.
4. Replace every prototype placeholder with approved source content. Omit
   unsupported statistics, accreditations, testimonials, and claims.
5. Verify in the browser (see QA below), then follow the Tina/hosting decision gate
   in `docs/05-add-a-cms-later.md` before the production runbook.

## Visual and copy standards

- The first viewport must clearly communicate who this business is and what it does.
- Use deliberate typography — one display face, one body face, chosen per project.
- Cards are for repeated items or framed tools, not the default wrapper for every
  section. No nested cards. No decorative UI that doesn't encode real information.
- Copy is specific, plain, and useful. Button labels state the action ("Get a quote",
  "Book a measure"). Proof sections use real, verifiable claims — never fake metrics.
- Responsive and accessible: no overflow/overlap at mobile or desktop widths, alt
  text, semantic structure, visible focus states, keyboard-friendly controls, and
  respect `prefers-reduced-motion`. Keep the skip link and aria attributes intact.

## Browser QA required before finishing

A passing build is not enough. For non-trivial frontend changes:

1. Run the dev server and confirm the page identity (not blank, no error overlay).
2. Check console for errors/warnings.
3. Test at least one relevant interaction (mobile nav, form, FAQ).
4. Check desktop and one mobile-sized viewport for clipping, overlap, unreadable
   text, layout shift, missing assets, and horizontal scroll.
5. Run `npm run build` and `npm run check` — both must pass clean.

## Final response expectations

Summarize: what changed, where the important files are, what was tested (including
viewports), and any known limitations. Keep it concise and factual.
