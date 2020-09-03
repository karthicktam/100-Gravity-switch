import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="checkbox">
      <input type="checkbox" id="ckb" />
      <label htmlFor="ckb">
        <div className="ball"></div>
      </label>
    </div>
  );
}
