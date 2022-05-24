import React from "react";
import WhatIsAgileImage from "../../assets/simulate-aegle.svg";
import MarketAnalysisIcon from "../../assets/market-analysis1.svg";
import { navigate } from "gatsby";

export default function AegleSimulateProcessCard({
  title = "Simulate Aegle ",
  description = "We put our money where our mouth is: see how much Aegle would save for a typical company using our Simulator!",
  right = false,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="container">
      <div
        className={classNames(right ? "d-flex flex-row-reverse row" : "row")}
      >
        <div className="col">
          <WhatIsAgileImage className="img-box" />
        </div>
        <div className="col">
          <MarketAnalysisIcon className="mb-39" />
          <p className="mb-39 ap-title">
            {title} <span class="badge bg-secondary">Beta</span>
          </p>
          <p className="mb-43 ap-content">{description}</p>
          <button
            className="buttonBorderOrgBlue"
            type="submit"
            onClick={() => {
              navigate("/simulate");
            }}
          >
            Simulate Aegle
          </button>
        </div>
      </div>
    </div>
  );
}
