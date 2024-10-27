import * as React from "react";
import {
  Link,
  type HeadFC,
  type PageProps,
  GetServerDataProps,
  GetServerDataReturn,
} from "gatsby";
import { POKEAPI_BASE_URL } from "../../lib/constants";
import { Button } from "../../components/button";

type ServerDataProps = {
  poke: any;
};

const PokemonPage: React.FC<PageProps<{}, {}, unknown, ServerDataProps>> = ({
  serverData,
  params,
}) => {
  const { pokemon } = params;

  return (
    <div className="h-screen container mx-auto p-4">
      <Button asChild>
        <Link to="/ssr">Back</Link>
      </Button>
      <h1 className="capitalize mt-10">{pokemon} data:</h1>
      {serverData && (
        <pre className="!bg-gray-100 p-2 rounded-md max-w-[90%]">
          {JSON.stringify(serverData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default PokemonPage;

export const Head: HeadFC = ({ params }) => {
  return <title>{params.pokemon} Title</title>;
};

export async function getServerData(
  props: GetServerDataProps,
): GetServerDataReturn<ServerDataProps> {
  try {
    const res = await fetch(
      `${POKEAPI_BASE_URL}/pokemon/${props.params?.pokemon}`,
    );

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    const poke = await res.json();

    return {
      status: 200,
      headers: {},
      props: {
        poke,
      },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: { poke: null },
    };
  }
}
