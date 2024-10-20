import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import PokemonTemplate from "../../templates/pokemon";

const IndexPage: React.FC<PageProps> = (props) => {
  return <PokemonTemplate {...props} />;
};

export default IndexPage;

export const Head: HeadFC = ({ params }) => {
  return <title>{params.pokemon} Title</title>;
};
