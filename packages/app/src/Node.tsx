import React, { useState } from "react";

const Node: React.FC = () => {
  const [state] = useState({ meet: "hello,", word: "node!" });
  return (
    <h1>
      {state.meet} {state.word}
    </h1>
  );
};

export default Node;
