import { A } from "@solidjs/router";
import { Cluster } from "../index";
import { For } from "solid-js";

import styles from './style.module.css';


const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "About",
    href: "/about",
  },
]

export const Nav = () => {
  return (
    <nav class={styles.nav}>
      <Cluster>
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </Cluster>
      <Cluster>
        <ul>
          <For each={links}>
            {link => (
              <li>
                <A href={link.href}>{link.name}</A>
              </li>
            )}
          </For>
        </ul>
      </Cluster>
    </nav>
  );
}
