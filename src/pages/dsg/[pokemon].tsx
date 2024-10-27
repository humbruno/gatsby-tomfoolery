import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { POKEAPI_BASE_URL } from "../../lib/constants";
import { Button } from "../../components/button";

const PokemonPage: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const { pokemon } = params;

  React.useEffect(() => {
    setLoading(true);
    fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemon}`)
      .then((r) => r.json())
      .then((v) => setData(v))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-screen container mx-auto p-4">
      <Button asChild>
        <Link to="/dsg">Back</Link>
      </Button>
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
  return () => {
    return {
      defer: true,
    };
  };
}
