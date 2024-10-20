import "./src/styles/global.css";
import * as React from "react";
import { Link, type GatsbyBrowser } from "gatsby";

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
        <Link
          style={{
            background: "white",
            color: "black",
            padding: 16,
          }}
          to="/"
        >
          Default
        </Link>
        <Link
          style={{
            background: "white",
            color: "black",
            padding: 16,
          }}
          to="/static"
        >
          Static
        </Link>
        <Link
          style={{
            background: "white",
            color: "black",
            padding: 16,
          }}
          to="/ssr"
        >
          SSR
        </Link>
      </nav>
      {element}
    </div>
  );
};
