/**
 * Centralized localStorage keys for the OpenBook application
 * 
 * This module serves as the single source of truth for all localStorage keys
 * used throughout the application. Any new feature that uses localStorage
 * should add its keys here to ensure they are properly cleared when needed.
 * 
 * Testing recommendations:
 * - Verify all individual keys are included in OPENBOOK_STORAGE_KEYS
 * - Ensure clearAllStorageData removes all documented keys
 * - Test that non-OpenBook keys are preserved during clearing
 * - Validate no duplicate keys exist in the arrays
 */

// Main data stores
export const SPACES_DATA_KEY = 'openbook_spaces_data';
export const NOTEBOOKS_DATA_KEY = 'openbook_notebooks_data';
export const STUDY_MODES_KEY = 'openbook_study_modes';
export const USER_DATA_KEY = 'openbook_user_data';
export const JOURNAL_ENTRIES_KEY = 'journalEntries'; // TODO: Consider migrating to openbook_journal_entries for consistency

// UI preferences and settings
export const SIDEBAR_STATE_KEY = 'sidebar-isOpen';
export const ANIMATIONS_PREFERENCE_KEY = 'enableAnimations';
export const SELECTED_MODEL_KEY = 'openbook_selected_model';
export const INSTALL_PROMPT_DISMISSED_KEY = 'installPromptDismissed';
export const USER_ID_KEY = 'openbook_user_id';

/**
 * All localStorage keys used by the OpenBook application
 * 
 * When adding new localStorage usage:
 * 1. Define the key as a named export above
 * 2. Add it to this array
 * 3. Update the clear storage UI description if needed
 */
export const OPENBOOK_STORAGE_KEYS: readonly string[] = [
  // Main data stores
  SPACES_DATA_KEY,
  NOTEBOOKS_DATA_KEY,
  STUDY_MODES_KEY,
  USER_DATA_KEY,
  JOURNAL_ENTRIES_KEY,
  
  // UI preferences and settings
  SIDEBAR_STATE_KEY,
  ANIMATIONS_PREFERENCE_KEY,
  SELECTED_MODEL_KEY,
  INSTALL_PROMPT_DISMISSED_KEY,
  USER_ID_KEY,
] as const;

/**
 * Categories of storage keys for documentation and UI purposes
 */
export const STORAGE_KEY_CATEGORIES = {
  DATA: {
    keys: [SPACES_DATA_KEY, NOTEBOOKS_DATA_KEY, STUDY_MODES_KEY, USER_DATA_KEY, JOURNAL_ENTRIES_KEY],
    description: 'Core application data (spaces, journals, notebooks, etc.)'
  },
  PREFERENCES: {
    keys: [SIDEBAR_STATE_KEY, ANIMATIONS_PREFERENCE_KEY, SELECTED_MODEL_KEY, INSTALL_PROMPT_DISMISSED_KEY, USER_ID_KEY],
    description: 'User preferences and UI settings'
  }
} as const;

/**
 * Whitelisted prefixes for OpenBook storage keys
 * This prevents accidental removal of keys from other applications
 * that might share similar prefixes
 */
const OPENBOOK_PREFIX_WHITELIST = [
  'openbook_',
  'openbook-dev_',
  'openbook-staging_',
] as const;

/**
 * Clears all OpenBook localStorage data
 * 
 * @param clearPreferences - Whether to also clear user preferences (default: true)
 */
export function clearAllStorageData(clearPreferences: boolean = true): void {
  const keysToRemove = clearPreferences 
    ? OPENBOOK_STORAGE_KEYS 
    : STORAGE_KEY_CATEGORIES.DATA.keys;
    
  // First, remove all explicitly defined keys
  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });
  
  // Fallback: if the caller opted to clear preferences, remove any additional
  // OpenBook-prefixed keys that we might have forgotten to whitelist explicitly.
  if (clearPreferences) {
    Object.keys(localStorage).forEach((key) => {
      const isOpenBookKey = OPENBOOK_PREFIX_WHITELIST.some((prefix) => key.startsWith(prefix));
      if (isOpenBookKey && !OPENBOOK_STORAGE_KEYS.includes(key as any)) {
        localStorage.removeItem(key);
      }
    });
  }
} 