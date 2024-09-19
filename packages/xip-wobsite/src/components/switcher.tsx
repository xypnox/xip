import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { Button } from "../../../xip-ui/dist/types";


import PhSunDuotone from '~icons/ph/sun-duotone';
import PhMoonDuotone from '~icons/ph/moon-duotone';

const currentTheme = () => {
  if (isServer) return "dark";
  const body = document.body;
  const localTheme = localStorage.getItem("xip-theme");
  if (localTheme) {
    body.classList.add(localTheme === "dark" ? "dark-mode" : "light-mode");
    return localTheme;
  }
  if (body.classList.contains("dark-mode")) {
    return "dark";
  } else if (body.classList.contains("light-mode")) {
    return "light";
  } else {
    const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    return userTheme;
  }
};

const Switcher = () => {
  const [cur, setCur] = createSignal(currentTheme());

  const switchTheme = () => {
    const current = currentTheme();
    const body = isServer ? undefined : document.body;
    // console.log(current);

    if (current === "dark") {
      body?.classList.add("no-transition");
      body?.classList.remove("dark-mode");
      body?.classList.add("light-mode");
      setTimeout(() => body?.classList.remove("no-transition"), 1000);
      localStorage.setItem("xip-theme", "light");
      setCur("light");
    } else {
      body?.classList.add("no-transition");
      body?.classList.remove("light-mode");
      body?.classList.add("dark-mode");
      setTimeout(() => body?.classList.remove("no-transition"), 1000);
      localStorage.setItem("xip-theme", "dark");
      setCur("dark");
    }
  }

  return (
    <Button onClick={switchTheme} class="switcher">
      {cur() === "dark" ? <PhSunDuotone /> : <PhMoonDuotone />}
    </Button>
  )
}

