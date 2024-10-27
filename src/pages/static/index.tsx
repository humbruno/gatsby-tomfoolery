import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { Button } from "../../components/button";

const POKEMONS = [
  "pikachu",
  "charmander",
  "clefairy",
  "squirtle",
  "bulbasaur",
  "onix",
  "geodude",
  "gengar",
  "hauter",
];

const StaticPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen mt-10 container mx-auto">
      <ul className="flex gap-4">
        {POKEMONS.map((v) => (
          <li key={v} className="p-4">
            <Button asChild>
              <Link to={`/static/${v}`}>{v}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticPage;

export const Head: HeadFC = () => {
  return <title>Static Title</title>;
};
