import path from "path";
import fetch from "node-fetch";
import type { GatsbyNode } from "gatsby";

const POKEMONS = [
  "pikachu",
  "charmander",
  "clefairy",
  "squirtle",
  "bulbasaur",
  "onix",
  "geodude",
  "gengar",
  "haunter",
];

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  for (const poke of POKEMONS) {
    console.info(`==== FETCHING DATA FOR POKEMON: ${poke} ====`);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for ${poke}: ${response.statusText}`,
        );
      }

      const pokeData = await response.json();
      console.info(`Data for ${poke} fetched successfully!`);

      createPage({
        path: `/static/${poke}`,
        component: path.resolve("./src/templates/pokemon.tsx"),
        context: {
          pokeData,
          title: poke,
        },
      });
    } catch (error) {
      console.error(`Error fetching data for ${poke}:`, error);
    }
  }
};
