import React, { useState, useContext } from "react";

import classes from "./Results.module.css";

import Card from "../UI/Card/Card";
import Calculator from "../store/calc-context";
import ResultsTable from "./ResultsTable";
import Button from "./Button/Button";

const Results = () => {
  const [tableIsShown, setTableIsShown] = useState(false);
  const ctx = useContext(Calculator);

  let decimal = parseInt(ctx.number, ctx.fromBase);

  let resultNumber = decimal.toString(ctx.toBase).toUpperCase();

  const toggleTableHandler = (event) => {
    setTableIsShown((prevState) => !prevState);
  };

  return (
    <Card className={classes.results}>
      <h2>Results</h2>
      <p className={classes.summary}>{resultNumber}</p>
      {!tableIsShown && (<Button type="button" onClick={toggleTableHandler}>
        Show Full Table
      </Button>)}
      {tableIsShown && (<Button type="button" onClick={toggleTableHandler}>
        Hide Table
      </Button>)}
      {tableIsShown && <ResultsTable />}
    </Card>
  );
};

export default Results;
