import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

type Ctx = {
  pokeData: string;
  title: string;
};

const PokemonTemplate: React.FC<PageProps<object, Ctx>> = ({ pageContext }) => {
  const { pokeData, title } = pageContext;

  return (
    <div className="h-screen p-4">
      <Link
        to="/static"
        className="bg-red-100 p-4 mb-10 inline-block  transition-all rounded-md hover:bg-red-300"
      >
        Back
      </Link>
      <h1 className="capitalize mt-10">{title} data:</h1>
      {pokeData && (
        <pre className="!bg-gray-100 p-2 rounded-md max-w-[90%]">
          {JSON.stringify(pokeData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default PokemonTemplate;

export const Head: HeadFC<object, Ctx> = ({ pageContext }) => {
  return <title>{pageContext.title} Name Title</title>;
};
