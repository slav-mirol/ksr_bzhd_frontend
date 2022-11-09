import React from "react";
import * as ReactDOMClient from "react-dom/client";

const elem = (<div>
    <h1>Носов хуесос</h1>
  </div>);

 const app = ReactDOMClient.createRoot(document.getElementById("root"));
 app.render(elem);