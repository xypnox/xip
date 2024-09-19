import { defineConfig } from "@solidjs/start/config";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      Icons({
        compiler: "solid",
      }),
    ],
  },
});
