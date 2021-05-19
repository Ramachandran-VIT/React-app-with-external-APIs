import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import "office-ui-fabric-react/dist/css/fabric.min.css";
import App from "./App";

initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
