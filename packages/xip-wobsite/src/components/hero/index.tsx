import { Cluster, Stack } from '../index';
import styles from './style.module.css';

export const Hero = (props: {
  title: string;
  subtitle: string;
  image: {
    url: string;
    alt: string;
  }
}) => {
  return (
    <Cluster class={styles.hero}>
      <Stack class={styles.content}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </Stack>
      <img src={props.image.url} alt={props.image.alt} />
    </Cluster>
  )
}
