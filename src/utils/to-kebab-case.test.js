import { describe, expect, test } from 'vitest';
import toKebabCase from './to-kebab-case';

describe('toKebabCase', () => {
  test('should return lower case regardless of the original case', () => {
    expect(toKebabCase('some random text')).toBe('some-random-text');
    expect(toKebabCase('Some Random Text')).toBe('some-random-text');
    expect(toKebabCase('SOME RANDOM TEXT')).toBe('some-random-text');
    expect(toKebabCase('sOme RaNDoM TeXt')).toBe('some-random-text');
  });

  test('should turn spaces into hyphens', () => {
    expect(toKebabCase('word another word more words')).toBe('word-another-word-more-words');
  });

  test('should leave numbers unchanged', () => {
    expect(toKebabCase('1234 some text a1b2c3')).toBe('1234-some-text-a1b2c3');
  });

  test('should remove punctuation', () => {
    expect(toKebabCase('????')).toBe('');
    expect(toKebabCase('Hello!')).toBe('hello');
    expect(toKebabCase('!! Wow!@#$%^ a!b@c# d$ %e ^f &*g hi*(j) k')).toBe('wow-abc-d-e-f-g-hij-k');
  });
});
