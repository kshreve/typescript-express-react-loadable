import React from "react";
import loadable from "./loadable";

const DynamicBox = loadable(() => import("./dynamic-box"));

type Props = { globalState: { text: string } };

const App = ({ globalState: { text } }: Props) => {
  return (
    <section className="section">
      <DynamicBox text={text} />
    </section>
  );
};

export default App;
