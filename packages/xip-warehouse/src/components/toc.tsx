import { Stack } from "@xypnox/xip-ui";
import { For } from "solid-js";
import styles from './toc.module.css';

export const TableOfContents = (
  props: {
    headings: { slug: string; depth: number; text: string }[]
  }
) => {
  return (
    <div>
      <Stack class={styles['toc-wrapper']}>
        <h2>Table of Contents</h2>
        <ul class={styles['toc-list']}>
          <For each={props.headings}>{(heading) => (
            <li style={{
              '--depth': heading.depth - 2,
            }}>
              <a href={`#${heading.slug}`}>{heading.text}</a>
            </li>
          )}
          </For>
        </ul>
      </Stack>
    </div>
  );
}
