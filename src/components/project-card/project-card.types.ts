import type { ReactNode } from 'react';

export type ProjectCardProps = {
  /**
   * The description of the project
   */
  description: ReactNode;
  /**
   * The url to the project, ether on my site or elsewhere
   */
  link?: string;
  /**
   * The url for a screenshot of the project
   */
  image?: string;
  /**
   * Alt text for the screeshot
   */
  imageAlt?: string;
  /**
   * The title of the project
   */
  title: string;
}
