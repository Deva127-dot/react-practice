import React, { useState } from "react";
import styles from "./calculator.module.css";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleChange1 = (e) => {
    setNum1(e.target.value);
  };
  const handleChange2 = (e) => {
    setNum2(e.target.value);
  };

  const addition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  const subtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };
  const multiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };
  const division = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };
  const clearAll = () => {
    setResult("");
    setNum1("");
    setNum2("");
  };
  const backspaceNum1 = () => {
    setNum1(num1.slice(0, -1));
  };
  const backspaceNum2 = () => {
    setNum2(num2.slice(0, -1));
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Calculator</h1>
      </div>
      <div className={styles.div_Input}>
        <input
          type="number"
          className={styles.input}
          value={num1}
          onChange={handleChange1}
        />
        <a onClick={backspaceNum1}>
          {" "}
          <BackspaceIcon className={styles.backspaceBtn} />{" "}
        </a>
        <input
          type="number"
          className={styles.input}
          value={num2}
          onChange={handleChange2}
        />
        <a onClick={backspaceNum2}>
          {" "}
          <BackspaceIcon className={styles.backspaceBtn} />{" "}
        </a>
      </div>
      <div>
        <h2 className={styles.h2}>
          Equal to: <a className={styles.equlVal}> {result} </a>{" "}
        </h2>
      </div>
      <div className={styles.div_Btn}>
        <div>
          <button name="+" className={styles.btn} onClick={addition}>
            Addition
          </button>
          <button name="-" className={styles.btn} onClick={subtraction}>
            Subtraction
          </button>
        </div>
        <div>
          <button name="*" className={styles.btn} onClick={multiplication}>
            Multiplication
          </button>
          <button name="/" className={styles.btn} onClick={division}>
            Division
          </button>
        </div>
        <button className={styles.clrBtn} onClick={clearAll}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default Calculator;
