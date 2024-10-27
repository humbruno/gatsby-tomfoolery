import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { Button } from "../../components/button";

const POKEMONS = [
  "eevee",
  "vaporeon",
  "umbreon",
  "venusaur",
  "arbok",
  "pigeon",
  "dugtrio",
];

const DSGPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen mt-10 container mx-auto">
      <ul className="flex gap-4">
        {POKEMONS.map((v) => (
          <li key={v} className="p-4">
            <Button asChild>
              <Link to={`/dsg/${v}`}>{v}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DSGPage;

export const Head: HeadFC = () => {
  return <title>DSG Title</title>;
};
