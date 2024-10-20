import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { POKEAPI_BASE_URL } from "../../lib/constants";

const PokemonPage: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const { pokemon } = params;

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemon}`)
        .then((r) => r.json())
        .then((v) => setData(v))
        .catch((e) => console.error(e))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-screen p-4">
      <Link
        to="/dsg"
        className="bg-red-100 p-4 mb-10 inline-block  transition-all rounded-md hover:bg-red-300"
      >
        Back
      </Link>
      <h1 className="capitalize mt-10">{pokemon} data:</h1>
      {data && (
        <pre className="!bg-gray-100 p-2 rounded-md max-w-[90%]">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default PokemonPage;

export const Head: HeadFC = ({ params }) => {
  return <title>{params.pokemon} Title</title>;
};

export async function config() {
  return ({ params }) => {
    return {
      defer: params.pokemon !== "arbok",
    };
  };
}
