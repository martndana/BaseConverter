import React, { useState } from "react";

const Calculator = React.createContext({
  fromBase: "2",
  toBase: "2",
  number: null,
  convertedNumber: 0,
  decimalNumber: 0,
  onSubmit: (data) => {},
  onReset: () => [],
  resultIsShown: false,
});


export const CalculatorProvider = (props) => {
  const [resultIsShown, setResultIsShown] = useState(false);
  const [calcState, setCalcState] = useState({
    fromBaseNumber: 2,
    toBaseNumber: 2,
    numberToConvert: '',
    convertedNum: 0
});

  const formSubmitHandler = (data) => {
    setResultIsShown(true);

    const receivedNumber = data.number;
    const fromBaseValue = +data.fromBase;
    const toBaseValue = +data.toBase;

    let resultNumber;
    
        let decimal = parseInt(receivedNumber, fromBaseValue);
        
        resultNumber = decimal.toString(toBaseValue).toUpperCase();

    setCalcState({
      fromBaseNumber: +data.fromBase,
      toBaseNumber: +data.toBase,
      numberToConvert: data.number,
      convertedNum: resultNumber,
      decimalNum: decimal,
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
        convertedNumber: calcState.convertedNum,
        decimalNumber: calcState.decimalNum,
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
