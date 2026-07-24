# Kickoff Prompt

Paste everything below the line to the agent after filling in the brief. It assumes
the agent is running in this project folder.

---

Read `agents.md`, `docs/01-project-brief.md`, and the private source at
`../Bennett_Advisory_Website_Workbook_Agent_Source.md`, then build the first pass
of Bennett Advisory's website in this folder.

The existing React/Vite prototype in `../Bennett Advisory Homepage Design/` is the
visual source of truth. Translate that direction into Astro; do not invent a new
design and do not treat prototype copy, names, biographies, dates, links,
statistics, or claims as factual. Use both `ui-ux-pro-max` and `frontend-design`
to critique and faithfully systematise the reference. If either is not registered
in the current agent environment, read its bundled
`.claude/skills/<name>/SKILL.md` completely and follow it before design work.

Work in this order:

1. **Setup and source audit.** Run `npm install` if `node_modules` is missing.
   Confirm that the only public navigation routes are Home, About, and Contact.
   Fill `src/data/site.ts` from approved facts and create CMS-friendly page content
   files outside the Astro markup. Remove the generic public service index/detail
   route assumptions. Never copy the private transcript or PDF into the repository.
2. **GitHub repo + live preview.** Use the existing public repository
   `https://github.com/lewisinder/bennet-advisory`. Do not create a second
   repository. Check the current Git state and remotes first. If this folder is not
   yet a repository, initialise it, commit the reviewed baseline, connect `origin`
   to the existing repository, and push:
   ```bash
   git init && git add -A && git commit -m "Template baseline"
   git branch -M main
   git remote add origin https://github.com/lewisinder/bennet-advisory.git
   git push -u origin main
   gh api repos/lewisinder/bennet-advisory/pages -X POST -f build_type=workflow
   ```
   Do not run `git remote add` if `origin` already exists; verify that it points to
   this exact repository and correct it only if needed. If the remote repository
   already has commits, inspect and reconcile them safely before pushing—never
   force-push or overwrite remote work. If the Pages API call fails, tell me to
   enable it manually under repository Settings → Pages → Source: "GitHub
   Actions". The preview URL will be
   `https://lewisinder.github.io/bennet-advisory/`. Commit and push after each
   approved milestone. The preview is automatically hidden from Google.
3. **Design system from the approved reference.** Convert the prototype into
   reusable Astro tokens and components: navy `#1B3252`, teal `#2BACD6`, paper
   `#F5F3EE`, paper-dark `#EAE6DF`; Libre Baskerville, Plus Jakarta Sans, and DM
   Mono roles; square document/folder tabs, fine rules, numbering, split
   photography, and restrained motion. Record this on `/design-system`. Preserve
   the character of the reference while fixing accessibility and responsiveness.
4. **Homepage.** Rebuild the approved visual composition in Astro: split hero,
   introduction, grouped service overview, process, supported proof/credentials,
   a concise team preview if appropriate, and the contact CTA. Services stay on the
   homepage. Replace every unsupported prototype statistic or claim; no
   testimonials are available.
5. **About and Contact.** Build an About page for the confirmed four-person team
   and a Contact page with address, hours, phone, email, map decision, and enquiry
   form. Keep 404 and thank-you as utility pages. Do not add public service pages.
   Do not build the privacy-policy page in this initial pass; its wording remains
   pending and it must not appear in the main navigation. Every indexable page gets
   a unique title and 150–160 character meta description.
6. **Asset checks.** Use only approved real imagery. Do not use
   `20251207_122110_1__1_.jpg` because it is AI-watermarked. Verify current
   permission/status before displaying STEP, CA ANZ, or Xero badges.
7. **Verify.** Browser QA per `agents.md` (desktop + mobile width, console clean,
   one interaction tested), then `npm run build` and `npm run check` — both clean.
   Push, and confirm the GitHub Pages preview updated and its links work.

Show me the design system page and homepage in the local preview when they're ready
for review, and keep the GitHub Pages preview current after each approved milestone.
Do not add TinaCMS or deploy to production in this pass. After the design and
content are approved, follow the compatibility decision in
`docs/05-add-a-cms-later.md`, then `docs/03-ship-runbook.md`.
