import React, { useState } from "react";

const Calculator = React.createContext({
  fromBase: "2",
  toBase: "2",
  number: null,
  onSubmit: (data) => {},
  onReset: () => [],
  resultIsShown: false,
});


export const CalculatorProvider = (props) => {
  const [resultIsShown, setResultIsShown] = useState(false);
  const [calcState, setCalcState] = useState({
    fromBaseNumber: 2,
    toBaseNumber: 2,
    numberToConvert: ''
});

  const formSubmitHandler = (data) => {
    setResultIsShown(true);

    setCalcState({
      fromBaseNumber: +data.fromBase,
      toBaseNumber: +data.toBase,
      numberToConvert: data.number,
    });
  };

  const hideResultsHandler = () => {
    setResultIsShown(false);
  }

  return (
    <Calculator.Provider
      value={{
        fromBase: calcState.fromBaseNumber,
        toBase: calcState.toBaseNumber,
        number: calcState.numberToConvert,
        onSubmit: formSubmitHandler,
        onReset: hideResultsHandler,
        resultIsShown: resultIsShown,
      }}
    >
      {props.children}
    </Calculator.Provider>
  );
};

export default Calculator;
