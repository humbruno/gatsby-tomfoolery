import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { Button } from "../components/button";

const POKEMONS = ["gastly", "voltorb", "arcanine"];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen mt-10 container mx-auto">
      <ul className="flex gap-4">
        {POKEMONS.map((v) => (
          <li key={v} className="p-4">
            <Button asChild>
              <Link to={`/${v}`}>{v}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Default Title</title>;
};
