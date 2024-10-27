import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { Button } from "../../components/button";

const POKEMONS = ["kabuto", "scyther", "alakazam", "snorlax"];

const SSRPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen mt-10 container mx-auto">
      <ul className="flex gap-4">
        {POKEMONS.map((v) => (
          <li key={v} className="p-4">
            <Button asChild>
              <Link to={`/ssr/${v}`}>{v}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSRPage;

export const Head: HeadFC = () => {
  return <title>SSR Title</title>;
};
