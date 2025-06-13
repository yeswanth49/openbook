// Jest test file for conversation-utils
// @jest-environment node
import { getDefaultNameRegex, isDefaultAutoName } from '../conversation-utils';

// The following line is for editor type support; not needed at runtime
 
import type {} from 'jest';

describe('getDefaultNameRegex', () => {
    const regex = getDefaultNameRegex();
    it('matches Untitled and Untitled 2 (case-insensitive)', () => {
        expect(regex.test('Untitled')).toBe(true);
        expect(regex.test('untitled')).toBe(true);
        expect(regex.test('Untitled 2')).toBe(true);
        expect(regex.test('untitled 10')).toBe(true);
    });
    it('matches Conversation 3:45 PM and variants', () => {
        expect(regex.test('Conversation 3:45 PM')).toBe(true);
        expect(regex.test('conversation 3:45 pm')).toBe(true);
        expect(regex.test('Conversation 12:00 AM')).toBe(true);
    });
    it('matches Space - 1', () => {
        expect(regex.test('Space - 1')).toBe(true);
        expect(regex.test('space - 1')).toBe(true);
    });
    it('does not match custom names', () => {
        expect(regex.test('My Chat')).toBe(false);
        expect(regex.test('Project Discussion')).toBe(false);
        expect(regex.test('UntitledX')).toBe(false);
    });
});

describe('isDefaultAutoName', () => {
    it('returns true for default names (case-insensitive)', () => {
        expect(isDefaultAutoName('Untitled')).toBe(true);
        expect(isDefaultAutoName('untitled 3')).toBe(true);
        expect(isDefaultAutoName('Conversation 9:15 am')).toBe(true);
        expect(isDefaultAutoName('space - 2')).toBe(true);
    });
    it('returns false for custom names', () => {
        expect(isDefaultAutoName('Work Notes')).toBe(false);
        expect(isDefaultAutoName('untitledX')).toBe(false);
        expect(isDefaultAutoName('Conversation at 3pm')).toBe(false);
    });
}); 