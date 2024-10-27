import "./src/styles/global.css";
import * as React from "react";
import { Link, type GatsbyBrowser } from "gatsby";
import { Button } from "./src/components/button";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <div>
      <nav
        style={{
          background: "black",
          padding: 24,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Button variant="secondary" asChild>
          <Link to="/">Default</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/static">Static</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/ssr">SSR</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/dsg">DSG</Link>
        </Button>
      </nav>
      {element}
    </div>
  );
};
