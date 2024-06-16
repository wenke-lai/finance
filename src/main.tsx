import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";
import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import App from "./App.tsx";

import "./index.css";

const px2rem = px2remTransformer({
  rootValue: 16, // 16px = 1rem; @default 16
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleProvider transformers={[px2rem]} layer>
      <IconContext.Provider value={{ className: "text-3xl" }}>
        <App />
      </IconContext.Provider>
    </StyleProvider>
  </React.StrictMode>
);
