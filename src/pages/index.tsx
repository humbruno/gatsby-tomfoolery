import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const POKEMONS = ["gastly", "voltorb", "arcanine"];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen mt-10">
      <ul className="flex gap-4">
        {POKEMONS.map((v) => (
          <li className="p-4">
            <Link
              className="bg-red-100 p-4 transition-all rounded-md hover:bg-red-300"
              to={`/${v}`}
            >
              {v}
            </Link>
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
