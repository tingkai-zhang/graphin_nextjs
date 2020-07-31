import React from "react";
import ReactDOM from "react-dom";
import { Utils } from "@antv/graphin";
const Graphin = require("@antv/graphin");

import "@antv/graphin/dist/index.css"; // 引入Graphin CSS

const data = Utils.mock(20).random().graphin();

const App = () => {
  return (
    <div>
      <Graphin data={data} layout={{ name: "force" }} />
    </div>
  );
};
export default App;
