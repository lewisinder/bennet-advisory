# Design Skills - Discovery, Fallback, and Installation

This project bundles two design-skill packages under `.claude/skills/`:

| Skill | What it does | Bundled path | Source |
| --- | --- | --- | --- |
| `ui-ux-pro-max` | Design-system decisions, colour, typography, UX, accessibility, and anti-pattern checks | `.claude/skills/ui-ux-pro-max/SKILL.md` | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| `frontend-design` | Distinctive visual direction, typography, copy, and layout critique | `.claude/skills/frontend-design/SKILL.md` | https://github.com/anthropics/skills/tree/main/skills/frontend-design |

The local folders are reliable fallbacks, but their presence does **not** guarantee
that every agent host automatically registers them as callable skills.

`.claude/` is ignored by Git. The bundled copies stay with this local project
folder when it is copied through the filesystem, but they do not travel through a
Git clone of the client repository.

## Required agent behaviour

Before substantial design work:

1. Check whether `ui-ux-pro-max` and `frontend-design` are registered in the
   current agent environment.
2. Use each registered skill normally.
3. If either skill is not registered, read its bundled `SKILL.md` completely from
   the path above before making design decisions, then follow its instructions as
   a local project workflow.
4. If neither the registered nor bundled copy is available, stop and report which
   skill is missing before continuing with design work.

Do not claim that a skill is unavailable merely because `.claude/skills/` was not
auto-discovered.

## Codex installation

For automatic discovery in future Codex sessions, install the skill into the
user's Codex skill directory through Codex's `skill-installer`.

Prompt Codex with:

> Install `ui-ux-pro-max` as a Codex skill from
> `nextlevelbuilder/ui-ux-pro-max-skill`, path
> `.claude/skills/ui-ux-pro-max`.

> Install `frontend-design` as a Codex skill from `anthropics/skills`, path
> `skills/frontend-design`.

Codex installs these under its user skill directory. Newly installed skills become
available from the next turn/session. Do not commit that user-level directory to
the website repository.

## Refreshing the bundled local copies

Use a temporary directory and copy only the two skill folders into this project.
Do not overwrite a locally modified skill without reviewing the differences.

### `frontend-design`

```bash
git clone --depth 1 https://github.com/anthropics/skills.git /tmp/anthropic-skills
mkdir -p .claude/skills
cp -R /tmp/anthropic-skills/skills/frontend-design .claude/skills/frontend-design
```

### `ui-ux-pro-max`

```bash
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/uipromax
mkdir -p .claude/skills
cp -R /tmp/uipromax/.claude/skills/ui-ux-pro-max .claude/skills/ui-ux-pro-max
```

After review, remove only those exact temporary checkout directories. Verify both
local destinations contain a complete `SKILL.md`.

## Claude Code marketplace alternative

These commands are for Claude Code, not Codex:

```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

/plugin marketplace add anthropics/skills
/plugin install frontend-design
```
