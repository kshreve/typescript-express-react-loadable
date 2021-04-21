import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../frontend/components/app";

export default () => {
  const GLOBAL_STATE = {
    text: "hello kevin",
  };

  const html = renderToString(<App globalState={GLOBAL_STATE} />);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <script>
          window.GLOBAL_STATE = ${JSON.stringify(GLOBAL_STATE)};
      </script>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hello SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="./entry.js"></script>
    </body>
  </html>
  `;
};
