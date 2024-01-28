import React from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = () => {
  // let income = expence;
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
        {/* <h1 className="">{income}</h1> */}
      </ul>
    </div>
  );
}

export default ExpenseList