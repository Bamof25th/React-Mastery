import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

// import React from 'react'

const Transaction = (props) => {
  const [currentHoverindex, setCurrentHoverindex] = useState(null);
  return (
    <li
      key={this.props.expense.id}
      className={`${styles.transaction} ${
        this.props.expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        // this.setState({ currentHoverIndex: this.props.index });
        setCurrentHoverindex(props.index);
      }}
      onMouseLeave={() => {
        // this.setState({ currentHoverIndex: null });
        setCurrentHoverindex(null);
      }}
    >
      <div>{this.props.expense.text}</div>
      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            this.state.currentHoverIndex === props.index && styles.movePrice
          }`}
        >
          ${props.expense.amount}
        </div>
        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === this.props.index && styles.active
          }`}
        >
          <div className={styles.edit} onClick={() => {}}>
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div className={styles.delete} onClick={() => {}}>
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;
