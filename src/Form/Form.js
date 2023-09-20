import React, { useState, useContext, useRef } from "react";

import classes from "./Form.module.css";
import Card from "../UI/Card/Card";
import Calculator from "../store/calc-context";
import Button from "../Results/Button/Button";

const FULL_CHAR_LIST = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const Form = (props) => {
  const [formData, setFormData] = useState({
    fromBase: "2",
    toBase: "2",
    number: null,
  });
  const [charList, setCharList] = useState(["0", "1"]);
  const [formIsComplete, setFormIsComplete] = useState(false);

  const ctx = useContext(Calculator);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    ctx.onSubmit(formData);
    // inputRef.current.value = "";
    // setFormIsComplete(false);
  };

  const resetClickHandler = (event) => {
    event.preventDefault();
    ctx.onReset();
    inputRef.current.value = "";
    setFormIsComplete(false);
  };

  const changeBaseHandler = (event) => {
    inputRef.current.value = "";
    ctx.onReset();

    if (event.target.id === "fromBase") {
      const base = +event.target.value;

      setCharList(FULL_CHAR_LIST.slice(0, base));

      setFormData((prevState) => ({
        ...prevState,
        fromBase: event.target.value,
      }));
    } else if (event.target.id === "toBase") {
      setFormData((prevState) => ({
        ...prevState,
        toBase: event.target.value,
      }));
    }
    
    return;
  };

  const inputChangeHandler = (event) => {
    const inputVal = inputRef.current.value;

    if (inputVal.trim().length === 0) {
      setFormIsComplete(false);
      ctx.onReset();
    } else {
      setFormIsComplete(true);
    }

    setFormData((prevState) => ({
      ...prevState,
      number: inputVal,
    }));
  };

  const keyPressHandler = (event) => {
    console.log(event);
    if (charList.includes(event.key) || event.key === "Backspace") {
        return event.key;
    } else {
        event.preventDefault();
        return;
    }
  };

  return (
    <Card>
      <form className={classes["conversion-form"]} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <label htmlFor="fromBase">From Base</label>
          <select id="fromBase" onChange={changeBaseHandler}>
            <option value="2">2 (binary)</option>
            <option value="3">3 (ternary)</option>
            <option value="4">4 (quarternary)</option>
            <option value="5">5 (quinary)</option>
            <option value="6">6 (senary)</option>
            <option value="7">7 (septimal)</option>
            <option value="8">8 (octal)</option>
            <option value="9">9 (nonal)</option>
            <option value="10">10 (decimal)</option>
            <option value="11">11 (undecimal)</option>
            <option value="12">12 (duodecimal)</option>
            <option value="13">13 (tredecimal)</option>
            <option value="14">14 (quadrodecimal)</option>
            <option value="15">15 (quindecimal)</option>
            <option value="16">16 (hexadecimal)</option>
          </select>
        </div>
        <div className={classes.controls}>
          <label htmlFor="toBase">To Base</label>
          <select id="toBase" onChange={changeBaseHandler}>
            <option value="2">2 (binary)</option>
            <option value="3">3 (ternary)</option>
            <option value="4">4 (quarternary)</option>
            <option value="5">5 (quinary)</option>
            <option value="6">6 (senary)</option>
            <option value="7">7 (septimal)</option>
            <option value="8">8 (octal)</option>
            <option value="9">9 (nonal)</option>
            <option value="10">10 (decimal)</option>
            <option value="11">11 (undecimal)</option>
            <option value="12">12 (duodecimal)</option>
            <option value="13">13 (tredecimal)</option>
            <option value="14">14 (quadrodecimal)</option>
            <option value="15">15 (quindecimal)</option>
            <option value="16">16 (hexadecimal)</option>
          </select>
        </div>
        <div className={classes.controls}>
          <label htmlFor="numberToConvert">Number to convert</label>
          <input
            id="numberToConvert"
            type="text"
            onChange={inputChangeHandler}
            onKeyDown={keyPressHandler}
            ref={inputRef}
          />
        </div>
        <div className={classes.actions}>
          <Button type="reset" onClick={resetClickHandler}>
            Reset
          </Button>
          <Button type="submit" disabled={!formIsComplete}>
            Convert
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
