export type LinkProps = {
  /**
   * Sets the aria-current value; used for nav links
   */
  ariaCurrent?: 'page';
  /**
   * The text to display in the link
   */
  children: string;
  /**
   * The URL that the link should point to.
   * If the value starts with `http`, then it is treated as an external link.
   */
  href: string;
  /**
   * Whether the link has padding.
   * Links in paragraphs should not have padding; other links should.
   * @default false
   */
  hasPadding?: boolean;
}
