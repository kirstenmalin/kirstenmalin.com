export type LinkProps = {
  /**
   * The text to display in the link
   */
  children: string;
  /**
   * The URL that the link should point to.
   * If the value starts with `http`, then it is treated as an external link.
   */
  href: string;
}
