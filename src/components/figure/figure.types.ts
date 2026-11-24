export type FigureProps = {
  /**
   * Alt text for the image. If omitted, the alt text is set to an empty string
   * @default ''
   */
  alt?: string;
  /**
   * Optional caption to display under the image
   */
  caption?: string;
  float?: 'inline-start' | 'inline-end';
  // maxWidth?: string;
  /**
   * The url of the image
   */
  src: string;
}
