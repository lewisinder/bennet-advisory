# Bennett Advisory Website

This folder is the implementation workspace for the Bennett Advisory website:
Astro, GitHub, TinaCMS, and Cloudflare. The intended public pages are Home, About,
and Contact. Read `agents.md` and `docs/01-project-brief.md` before changing code.

The folder began as a generic website-in-a-day starter. Its current placeholder
pages and data are scaffolding, not the agreed information architecture.

## What's in the box

| Piece | What it is |
| --- | --- |
| `src/` | The Astro skeleton. Home, About, and Contact will be public; service routes are template leftovers to remove during implementation |
| `src/styles/global.css` | The design system: every colour/font/spacing token and every class the site is allowed to use |
| `src/data/` | All business details and content as simple data files — the agent edits these, not scattered markup |
| `.claude/skills/` | Bundled local fallbacks for `ui-ux-pro-max` and `frontend-design`; see [discovery and installation instructions](docs/06-install-skills.md) |
| `.github/workflows/` | Auto-deploys every push to a GitHub Pages preview — watch progress live, doubles as a backup |
| `agents.md` | Standing instructions the agent follows on every build |
| `docs/` | The build-day paperwork: brief, kickoff prompt, ship runbook, launch checklist, CMS playbook, skills guide |

SEO is wired in already: unique titles/descriptions per page, canonical URLs, Open
Graph tags, LocalBusiness + FAQ structured data, sitemap, robots.txt, and everything
renders as plain HTML that Google can read without running JavaScript.

## Bennett Advisory workflow

1. Read [agents.md](agents.md), the
   [project brief](docs/01-project-brief.md), and the private source files referenced
   there.
2. Use the separate `Bennett Advisory Homepage Design/` project as visual
   direction only.
3. **Paste the kickoff prompt** from
   [docs/02-kickoff-prompt.md](docs/02-kickoff-prompt.md) to the agent. It sets up
   the GitHub repo first thing, so from the first milestone onwards you can watch
   the site take shape at `https://<your-username>.github.io/<project-name>/` —
   that preview updates on every push, acts as an off-machine backup, and is
   automatically hidden from Google.
4. Review the design system page and homepage in the preview, give feedback, iterate.
5. Resolve the TinaCMS/Cloudflare decision in
   [docs/05-add-a-cms-later.md](docs/05-add-a-cms-later.md).
6. When it looks right, follow [docs/03-ship-runbook.md](docs/03-ship-runbook.md).
7. Before telling the client it is live, run
   [docs/04-launch-checklist.md](docs/04-launch-checklist.md).

## The two rules that keep builds clean

1. **The design system page is the contract.** `/design-system` shows every token,
   type role, and component. Pages are built only from what's on that page. Change the
   look by changing tokens in `global.css` — never with one-off styles.
2. **Content lives in data files.** Business details in `src/data/site.ts`, services
   in `src/data/services.ts`, FAQs in `src/data/faqs.ts`. Changing content never means
   hunting through page markup — and it keeps the door open for a CMS later
   (see [docs/05-add-a-cms-later.md](docs/05-add-a-cms-later.md)).

## Useful commands (the agent runs these)

```bash
npm install      # once, after copying the folder
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
npm run check    # type/error check
```
