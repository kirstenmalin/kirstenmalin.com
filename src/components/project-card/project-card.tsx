import Link from '#components/link';
import toKebabCase from '#utils/to-kebab-case';
import type { ProjectCardProps } from './project-card.types';
import styles from './project-card.module.css';

export default function ProjectCard ({
  description,
  link,
  image,
  imageAlt,
  title,
}: ProjectCardProps) {
  const id = toKebabCase(title);

  return (
    <article aria-labelledby={id} className={styles.projectCard}>
      <img alt={imageAlt} className={styles.image} src={image} />
      <h2 className={styles.title} id={id}>
        { link
          ? <Link href={link}>
            {title}
          </Link>
          : title
        }
      </h2>
      <div className={styles.description}>{description}</div>
    </article>
  );
}
