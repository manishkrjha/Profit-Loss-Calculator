import "./styles.css";
import React, { useState } from "react";

var inputStyle = {
  border: "2px solid #7c3aed",
  borderRadius: "0.6rem",
  padding: "0.5rem",
  width: "15rem"
};

var buttonStyle = {
  cursor: "point",
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "0.6rem",
  border: "none",
  borderRadius: "0.5rem",
  backgroundColor: "#7c3aed",
  color: "#FFFFFF",
  fontSize: "large"
};

export default function App() {
  const [initialPrice, setinitialPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [displayValue, setDisplayValue] = useState("");

  function inputHandler(event) {
    setinitialPrice(event.target.value);
  }

  function quantityHandler(event) {
    setQuantity(event.target.value);
  }

  function currentPriceHandler(event) {
    setCurrentPrice(event.target.value);
  }

  function calculateProfitAndLoss() {
    if (initialPrice === currentPrice) {
      setDisplayValue("Hey!! You did not had any profit of loss.");
    }

    var costPrice = initialPrice * quantity;
    var sellingPrice = currentPrice * quantity;

    if (costPrice > sellingPrice) {
      var loss = costPrice - sellingPrice;
      var lossPercentage = (loss / costPrice) * 100;
      setDisplayValue(
        "You loss amount is " +
          loss +
          " and your loss percentage is " +
          lossPercentage.toFixed(2) +
          "% 😔"
      );
    }

    if (sellingPrice > costPrice) {
      var profit = sellingPrice - costPrice;
      var profitPercentage = (profit / costPrice) * 100;
      setDisplayValue(
        "You profit amount is " +
          profit +
          " and your profit percentage is " +
          profitPercentage.toFixed(2) +
          "% 😀"
      );
    }
  }

  function buttonHandler() {
    if (initialPrice === 0 || quantity === 0 || currentPrice === 0) {
      alert("Please fill out all Fields");
      return;
    } else {
      calculateProfitAndLoss();
    }
  }
  return (
    <div className="App">
      <h1>Stock Profit and Loss calculator</h1>
      <h3>Initial Price</h3>
      <input style={inputStyle} type="number" onChange={inputHandler}></input>
      <h3>Quantity of stocks</h3>
      <input
        style={inputStyle}
        type="number"
        onChange={quantityHandler}
      ></input>
      <h3>Current Price</h3>
      <input
        style={inputStyle}
        type="number"
        onChange={currentPriceHandler}
      ></input>
      <br />
      <button style={buttonStyle} onClick={buttonHandler}>
        Tell me!!
      </button>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "large"
        }}
      >
        {displayValue}
      </div>
    </div>
  );
}
