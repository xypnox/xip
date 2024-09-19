import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import { website } from "./content/base";
import { Nav } from "./components/nav";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>{website.title()}</Title>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
