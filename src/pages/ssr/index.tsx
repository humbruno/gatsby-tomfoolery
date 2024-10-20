import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const SSRPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen">
      <h1>SSR</h1>
    </div>
  );
};

export default SSRPage;

export const Head: HeadFC = () => {
  return <title>SSR Title</title>;
};
