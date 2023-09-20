import React, { useContext } from "react";

import Form from "./Form/Form";
import Header from "./Header/Header";
import Results from "./Results/Results";
import Calculator from "./store/calc-context";

const App = () => {
  const ctx = useContext(Calculator);

  return (
    <div className="app">
      <Header />
      <main>
        <Form />
        {ctx.resultIsShown && <Results />}
      </main>
    </div>
  );
};

export default App;
