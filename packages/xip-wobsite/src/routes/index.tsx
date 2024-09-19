import { Title } from "@solidjs/meta";
import { Stack } from "@xypnox/xip-ui";
import { Hero } from "~/components/hero";

export default function Home() {
  return (
    <main>
      <Stack>
        <Title>Hello World</Title>
        <Hero
          title="Future without the fluff"
          subtitle="Experience interface from the future without the fluff of the past"
          image={{
            url: "/SomeUI.svg",
            alt: "Logo",
          }}
        />
      </Stack>
    </main>
  );
}
