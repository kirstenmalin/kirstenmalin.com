import type { FigureProps } from './figure.types';
import styles from './figure.module.css';

export default function Figure({ alt = '', caption, float, src }: FigureProps) {
  const Wrapper = caption ? 'figure' : 'div';
  const classes = [styles.figure];
  if (float === 'inline-start') {
    classes.push(styles.floatStart);
  } else if (float === 'inline-end') {
    classes.push(styles.floatEnd);
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <img
        alt={alt}
        className={styles.image}
        src={src}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </Wrapper>
  );
}
