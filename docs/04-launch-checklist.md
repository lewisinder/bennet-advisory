# Launch Checklist

Run through this before telling the client the site is live. The agent can verify
most of it — paste this file and ask it to check everything and report back.

## Content & correctness

- [ ] No placeholder text anywhere ("Business Name", "Service One", "Town or city",
      example.com, 021 000 0000…). Search the whole `src/` folder to be sure.
- [ ] Main navigation contains only Home, About, and Contact.
- [ ] No public service index or service-detail routes are present in the build or
      sitemap; approved service summaries appear on Home.
- [ ] Phone number and email are correct and clickable (`tel:` / `mailto:` links).
- [ ] Every service in `src/data/services.ts` is real and correctly described.
- [ ] Team names, roles, biographies, and experience figures match approved source
      content for Melanie Bennett, Sarah Clay, Glenn Schussler, and Helen Gleeson.
- [ ] None of the prototype-only proof claims ("150+ trusts", "100% independent",
      or "25+ years combined") appear.
- [ ] Legal name and service areas in the footer are right.
- [ ] Favicon replaced with the client's mark (`public/assets/favicon.svg`).
- [ ] The AI-watermarked `20251207_122110_1__1_.jpg` is not used.
- [ ] Rights/status are confirmed for all photos and STEP, CA ANZ, or Xero badges.
- [ ] Privacy-policy wording and route have been approved before the form goes live.

## SEO

- [ ] Production domain set identically in `astro.config.mjs` (`site`) and
      `src/data/site.ts` (`url`).
- [ ] Every page has a unique title and a 150–160 character meta description.
- [ ] `https://<domain>/robots.txt` loads and points to the sitemap.
- [ ] `https://<domain>/sitemap-index.xml` loads and lists only real pages
      (no design-system, admin, thank-you, service-detail, or preview routes).
- [ ] View page source on the homepage: the actual content (headings, services,
      phone number) is visible in the raw HTML — this is what Google reads.
- [ ] Structured data is valid: test the homepage at
      https://search.google.com/test/rich-results
- [ ] Sitemap submitted in Google Search Console.

## Forms

- [ ] Web3Forms access key created with the **client's** email and set in
      `src/data/site.ts` (no "REPLACE_WITH" placeholder left).
- [ ] Test enquiry submitted on the **live** site → arrives in the client's inbox
      (first one may land in spam — mark it "not spam").
- [ ] Thank-you page shows after submitting.

## TinaCMS

- [ ] The selected Cloudflare hosting path matches
      `05-add-a-cms-later.md` (Workers for full Astro visual editing, or a proven
      static Pages approach).
- [ ] `/admin/` requires an authorised editor and is noindex.
- [ ] Editing each intended Home, About, and Contact field works.
- [ ] Saving creates a reviewable commit on the intended GitHub branch.
- [ ] Preview and production builds receive the required Tina environment
      variables; no tokens are committed.
- [ ] `tinacms audit` (or the current documented equivalent) passes.

## Quality (the agent verifies in a browser)

- [ ] No console errors on any page.
- [ ] Mobile (375px) and desktop: no clipping, overlap, or horizontal scroll.
- [ ] Mobile nav opens, closes, and every link works.
- [ ] All internal links resolve (no 404s); 404 page itself renders.
- [ ] Images have alt text; no missing-image icons anywhere.
- [ ] Keyboard test: tab through the homepage — skip link appears first, focus is
      always visible, the form is reachable and submittable.
- [ ] Lighthouse (Chrome DevTools or https://pagespeed.web.dev) on the live URL:
      aim for 90+ on Performance, Accessibility, Best Practices, and SEO. A static
      Astro site scoring below that usually means an oversized image.

## Handover

- [ ] Client has the live URL and knows enquiries arrive by email.
- [ ] You have noted the GitHub repo, production branch, Cloudflare project,
      canonical domain, and Pages-versus-Workers decision in your records.
- [ ] Client editors have TinaCMS access and understand the review/publish flow.
