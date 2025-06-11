# UI Space Revamp – Streak & "Surprise Me!" Button

## Objective
Replace the existing **Time & Date** UI element in the *Spaces* interface with:

1. **Daily Streak indicator** – shows an emoji 🔥 (or 🎉) followed by the user's current login streak.
2. **"Surprise Me!" button** – injects a randomly-chosen, highly-curated question into the chat input (similar to Google "I'm Feeling Lucky").

## High-Level Flow
1. On every load of *Spaces* home, initialise streak logic (read / write `localStorage`).
2. Render `Streak` component in place of `TimeDate`.
3. Render `SurprisePromptButton` next to the `Streak` component.
4. When button is clicked, fetch a prompt via `getRandomPrompt()` and pre-fill chat composer.

---

## Detailed Implementation Steps

### 1. Locate & remove Time/Date UI
- Search codebase for the current Time & Date component (`TimeDate.tsx` or usage).
- Delete the component import & JSX in the *Spaces* layout.
- Ensure surrounding styling/grid remains intact after removal.

### 2. Streak component
| Task | Details |
| ---- | ------- |
| **Create file** | `components/space/Streak.tsx` |
| **State source** | LocalStorage keys:<br>• `streak: number`<br>• `lastLoginISO: string` |
| **Algorithm** | 1. Read keys.<br>2. If missing → initialise `{streak: 1, lastLoginISO: today}`.<br>3. If lastLoginISO == today → keep streak.<br>4. If lastLoginISO == yesterday → `streak += 1`.<br>5. Else → reset to 1.<br>6. Persist changes back to storage. |
| **Display** | Show 🔥 `<streak>` (emoji can rotate 🎉 ⭐️ 🏅 every 5th day). |
| **Hook** | Extract logic into `hooks/useStreak.ts` for separation & testability. |

### 3. Surprise button & prompt engine
| Task | Details |
| ---- | ------- |
| **Create prompt pool** | `lib/surprisePrompts.ts` exporting `getRandomPrompt(): string` |
| **Prompt curation** | Hard-code ±30 thoughtful, humorous, or deep questions. |
| **Create button** | `components/space/SurprisePromptButton.tsx` |
| **UX** | Tailwind styling: rounded-full, gradient bg, hover spin icon 🎲. |
| **Behaviour** | On click → call `getRandomPrompt()` then:<br>• If chat composer exists → set its value.<br>• Else → open new chat modal pre-seeded. |
| **Analytics** | Emit `surprise_prompt_clicked` event. |

### 4. Integrate into Spaces layout
- Path likely `app/spaces/page.tsx` or similar.
- Import and place `<Streak />` and `<SurprisePromptButton />` where TimeDate lived.
- Ensure responsive placement (flex-row on MD+, stacked on XS).

### 5. Testing
1. **Unit tests** (`jest`)
   - `useStreak` edge-cases: first visit, consecutive day, skip day.
   - `getRandomPrompt` never returns undefined & covers full set over many iterations.
2. **E2E (Playwright)**
   - Mock date, visit on day 1 and next day, assert streak increments.
   - Click "Surprise Me!" and check composer filled.

### 6. Migration / Backwards compatibility
- TimeDate component may be reused elsewhere → confirm before deleting; otherwise keep file but mark deprecated.

### 7. Rollout Checklist
- [ ] PR includes screenshots / video of new UI.
- [ ] All tests pass locally & CI.
- [ ] Docs & README updated (this file). 
- [ ] Confirm analytics dashboards updated to include new events.

---

## Future Enhancements
- Gamify streaks with milestone confetti at 7-day, 30-day etc.
- Allow users to share streak on social media.
- Make prompt pool dynamic via CMS instead of hard-coded list. 