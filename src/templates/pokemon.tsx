import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const PokemonTemplate: React.FC<PageProps> = ({ params, pageContext }) => {
  const { pokemon } = params;
  const { pokeData } = pageContext;

  return (
    <div className="h-screen p-4">
      <Link
        to="/static"
        className="bg-red-100 p-4 mb-10 inline-block  transition-all rounded-md hover:bg-red-300"
      >
        Back
      </Link>
      <h1 className="capitalize mt-10">{pokemon} data:</h1>
      {pokeData && (
        <pre className="!bg-gray-100 p-2 rounded-md max-w-[90%]">
          {JSON.stringify(pokeData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default PokemonTemplate;
