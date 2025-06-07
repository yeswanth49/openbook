# Task: Vercel Deployment & Docs

Phase reference: 7C.

Goal: Configure Vercel, draft deployment documentation and tag release `v1.0.0`.

Implementation Steps

1. Add `vercel.json` specifying build command `pnpm build` and output `.`.

2. Configure environment variables in Vercel dashboard and document them in `.env.example`.

3. Set up Production and Preview branches.

4. Write `docs/deployment.md` including:
   • how to trigger manual redeploy  
   • how to promote preview to production  
   • rollback instructions.

5. After first successful production deploy, create Git tag `v1.0.0`.

Acceptance Checklist

✓ Visiting production URL shows commit SHA in footer.  
✓ Rolling back to previous deployment works via Vercel UI.  
✓ `docs/deployment.md` exists and is up-to-date.

Commit: `chore(deploy): configure vercel + docs`.
