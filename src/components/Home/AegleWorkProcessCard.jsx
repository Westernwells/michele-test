import React from "react";
import WhatIsAgileImage from "../../assets/how-aegle-works.svg";
import MarketAnalysisIcon from "../../assets/market-analysis1.svg";
export default function AegleWorkProcessCard({
  title = "What is Aegle and Who Aegle Covers",
  description = "See an illustrative example",
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
          <p className="mb-39 ap-title">{title}</p>
          <p className="mb-43 ap-content">{description}</p>
          <button className="buttonBorderOrgBlue" type="submit">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
