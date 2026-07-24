# Project Brief

This is the build-ready synthesis for Bennett Advisory. It does not replace the
private verbatim workbook transcript at
`../../Bennett_Advisory_Website_Workbook_Agent_Source.md`.

## Confirmed project shape

- Build location: this `website-in-a-day-template/` folder.
- Framework: Astro.
- Public pages: Home, About, and Contact only.
- Services: presented on Home; no public service index or service-detail routes.
- Utility routes: 404 and thank-you. Do not build the privacy-policy route in the
  initial pass; its wording remains pending and must be resolved before production.
  It should not appear in the main nav.
- Visual source of truth: `../../Bennett Advisory Homepage Design/`. Port its
  visual system and layout patterns; do not use its placeholder content as fact.
- Content source of truth:
  `../../Bennett_Advisory_Website_Workbook_Agent_Source.md`, checked against the
  original PDF when needed.
- Repository and deployment: use the existing public repository
  `https://github.com/lewisinder/bennet-advisory`. Cloudflare is the intended
  production host. The exact Pages-versus-Workers choice must be settled before
  TinaCMS implementation; see `05-add-a-cms-later.md`.
- CMS: TinaCMS is a planned delivery phase, not an optional future idea.

```
Business name: Bennett Advisory Ltd
What they do (one sentence): Chartered-accountant-led accounting, tax, trust establishment, trustee, administration, and trust-review services for New Zealand businesses, individuals, trusts, and families.
Target audience / who is buying: New Zealand small-to-medium business owners, individuals, families, trustees, and beneficiaries who need accounting, tax, trust structuring, or ongoing trust administration advice.
Real subject matter to lean on (materials, places, process, proof — the concrete stuff): Properly administered trusts; accurate records; New Zealand trust-law compliance; Xero-based accounting; tax and ownership structuring; trust documentation reviews; French Bay Yacht Club / Titirangi setting; and the team’s direct trust, Big 4, Guardian Trust, and accounting experience.
Primary location / service area (if local): Titirangi / West Auckland, serving Auckland and New Zealand clients. Office: French Bay Yacht Club, corner Otitori Bay Rd and Valley Rd, Titirangi, Auckland 0604. Postal: PO Box 80004, Green Bay 0643.
Brand colours (hex if known, with a role each — primary / accent / support / dark / light — or "agent's choice"): Use the visual prototype palette: navy #1B3252, teal #2BACD6, paper #F5F3EE, paper-dark #EAE6DF, with green #7EC242 limited to approved legacy-brand accents. Use Xero partner blue only if the current badge and permission/status are confirmed.
Logo available? (file path or "none yet"): ../Old Files/Logo.png. Supporting brand assets: ../Old Files/Charted Accountants Logo.jpg, ../Old Files/STEP Logo.jpg, and ../Old Files/Xero Partner.png.
Core services/offerings to feature (3–6, one line each):
- Trust establishment services — setting up a properly structured trust to protect assets.
- Trustee services — acting as an independent trustee to help keep trusts compliant.
- Ongoing trust administration — accurate records and annual administration; Bennett Advisory can assist without being trustee.
- Trust health-check reviews — reviewing trust documents against current legislation and identifying updates needed.
- Accounting and tax advice — Xero-based accounts and tax returns for small-to-medium businesses, individuals, and trusts.
- Specialist tax and structuring advice — overseas investment income, rental-property tax, business transactions, domestic/offshore structuring and restructuring, and tax-risk reviews.
Real proof points (years operating, guarantees, credentials, review quotes — must be true): Melanie Bennett has 25+ years providing accounting, tax, and trust-administration advice; 10+ years’ tax experience in Big 4 firms to Senior Manager level; former leader of Guardian Trust’s corporate tax team (now Perpetual Guardian). Sarah Clay has 15+ years administering family and charitable trusts, deceased estates, wills, and enduring powers of attorney. Glenn Schussler has 30+ years’ management and finance-accounting experience. Helen Gleeson has 10+ years providing accounting-support and administration assistance. Trust administration uses cloud-based software backed by New Zealand trust experts. No approved client testimonials supplied. Do not use the prototype's “150+ trusts”, “100% independent”, or “25+ years combined” statistics.
Reference sites you like (URLs) and what you like about each: None supplied.
Tone (e.g. local + plain, premium + minimal, technical + confident): Clean, professional, practical, and plain-English; confident but approachable.
Things to avoid (phrases, clichés, looks): Generic stock-business imagery and unsubstantiated testimonials or metrics. Do not present the outdated wording that says the Trusts Act 2019 is still moving through the legislative process. Avoid generic financial-services design; use real French Bay/coastal and team imagery where available. Do not use `20251207_122110_1__1_.jpg`; it is visibly AI-generated and watermarked.
Primary call-to-action (Get a quote / Book / Contact / Buy): Get in touch / start a straightforward conversation.
Phone / email for the site: 021 707 244; melanie@bennettadvisory.co.nz. Enquiry forms should go to Melanie’s email.
Domain (if known): Existing production domain is https://bennettadvisory.co.nz/. Confirm whether the canonical launch URL will use the apex or `www` form. Private domain-management details live only in the private transcript/PDF and must never enter the repository.
Photos available? (folder path — real photos of the actual work always beat stock): `../../Bennett Advisory Homepage Design/src/imports/Melanie.jpeg`, `Sarah.jpg`, `20260506_080416.jpg`, and `3ed63140-36d9-4cc1-a6a7-f75ea7893080.jpeg`. The older copies also exist under `../../Old Files/`. Confirm rights/approval for every production image and badge.
```

## Source-of-truth rules

Use [the private agent transcript](../../Bennett_Advisory_Website_Workbook_Agent_Source.md)
as the accessible source for workbook wording, and use
[the original PDF](../../Bennett_Advisory_Website_Workbook.docx.pdf) to verify
layout or transcription questions. The transcript deliberately preserves examples,
legacy copy, and typos; its preface explains how to interpret them.

The React/Vite prototype is visual-only. It contains placeholder team identities,
biographies, statistics, claims, footer links, and dates. None of those may enter
the Astro site without support in the private transcript or explicit approval.

The private transcript and PDF both contain sensitive operational information.
They stay outside the website repository and must never be copied into code,
commits, generated pages, logs, or public responses.

## Open confirmations before production

- Confirm apex versus `www` as the canonical production URL.
- Obtain and approve the privacy-policy wording, then add its unlisted footer
  utility route before launch.
- Confirm image rights and the current right to display STEP, CA ANZ, and Xero
  badges.
- Confirm whether the French Bay map should be embedded or linked.
- Confirm the enquiry form provider and test destination.
- Confirm that all four team members and experience figures remain current.
- Confirm any prototype service descriptions that go beyond the workbook wording.

The first-pass Contact page uses a privacy-light external Google Maps link rather
than an embed, and opens a pre-addressed email from the enquiry form. These are
review defaults only; confirm the production map and form-delivery decisions
before launch.
