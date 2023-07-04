import React, { useState } from "react";
import styles from "./studentForm.module.css";

function StudentForm() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    age: "",
    number: "",
  });

  const [inputArr, setInputArr] = useState([]);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  let { name, email, age, number } = inputData;
  const handleClick = () => {
    setInputArr([...inputArr, { name, email, age, number }]);
    setInputData({ name: "", age: "", email: "", number: "" });
  };

  return (
    <>
      <div className={styles.main}>
        <p className={styles.heading}>Student Information Form</p>
        <div className={styles.inputDiv}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            className={styles.inputBox}
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            className={styles.inputBox}
            required
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={inputData.age}
            onChange={handleChange}
            className={styles.inputBox}
            required
            autoComplete=""
          />
          <input
            type="number"
            placeholder="Mobile No."
            name="number"
            value={inputData.number}
            onChange={handleChange}
            className={styles.inputBox}
            required
            autoComplete="off"
          />
        </div>
        <button className={styles.btn} onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className={styles.tableMain}>
        <table border={1} width="50%" cellPadding={10} className={styles.tbody}>
          <tbody>
            <tr>
              <td className={styles.tableHeading}>Name</td>
              <td className={styles.tableHeading}>Email</td>
              <td className={styles.tableHeading}>Age</td>
              <td className={styles.tableHeading}>Mobile No.</td>
            </tr>
            {inputArr.map((item, i) => {
              return (
                <tr key={i}>
                  <td className={styles.tableData}> {item.name} </td>
                  <td className={styles.tableData}> {item.email} </td>
                  <td className={styles.tableData}> {item.age} </td>
                  <td className={styles.tableData}> {item.number} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentForm;
