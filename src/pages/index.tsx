import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Home Title</title>;
};
