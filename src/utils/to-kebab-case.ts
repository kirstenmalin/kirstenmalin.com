/**
 * @param text A short string of normal, space-delimited text
 * @returns A lower-case, kebab-case copy of the string with punctuation removed
 */
export default function toKebabCase(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .filter((char) => /[a-zA-Z0-9 ]/.test(char))
    .join('')
    .trim()
    .replaceAll(' ', '-');
}
