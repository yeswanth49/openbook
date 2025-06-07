# Dependency Hygiene

## Goal

Automate vulnerability patches & keep packages up-to-date.

## Steps

1. **Enable Dependabot**  
   Add `.github/dependabot.yml`:

   ```yml
   version: 2
   updates:
     - package-ecosystem: 'npm'
       directory: '/'
       schedule:
         interval: 'weekly'
       open-pull-requests-limit: 10
   ```

2. **CI audit**  
   In GitHub Actions `ci.yml`, add step:
   ```yaml
   - name: Security audit
     run: pnpm audit --audit-level=high
   ```

Checklist: first Dependabot PR auto-created next Monday.
