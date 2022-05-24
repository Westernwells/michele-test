import React from "react";
import FormA from "./formA";
import FormB from "./formB";
import { navigate } from "gatsby";

export default function Simulate() {
  return (
    <div className="simulate-container">
      <p className="text-center mb-4 text-white">Stop-loss Assumptions</p>

      <FormA />
      <FormB />
      <div className="container">
        <p className="simulate-legend text-start">
          *PEPM = Per Employee Per Month
        </p>
        <div className="d-flex justify-content-center mx-auto">
          <button
            className="buttonFullOrgMain text-center"
            onClick={() => {
              navigate("/result");
            }}
          >
            Simulate Aegle
          </button>
        </div>
      </div>
    </div>
  );
}
