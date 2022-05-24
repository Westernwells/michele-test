import React from "react";
import UmbrellaIcon from "../../assets/Vector.svg";
import PurseIcon from "../../assets/Group.svg";
export default function Nutshell() {
  return (
    <div className="container nutshell-container">
      <h2 className="text-center">Aegle in a Nutshell</h2>
      <p className="text-center nutshell-sub-content">
        Aegle is a next-generation replacement of traditional stop-loss
        reinsurance for self-insured employers and other risk-bearing entities.
      </p>
      <div className="row gap-5 agile-mini-card-box">
        <div className="side-a col text-center box agile-bg py-5">
          <PurseIcon className="mb-4" />
          <h3 className="mb-3">Lower Spend</h3>
          <p className="mb-3">20%+ cumulative savings over 5 years</p>
          <p className="mb-5">Typical first-year savings: 60-80%</p>
          <button className="buttonBorderOrgOrange mt-5">Learn More</button>
        </div>
        <div className="side-b col text-center box agile-bg py-5">
          <UmbrellaIcon className="mb-4" />
          <h3 className="mb-3">Better Coverage</h3>
          <p className="mb-3">No lasers or exclusions</p>
          <p className="mb-5">Eliminates deductibles</p>
          <button className="buttonBorderOrgOrange mt-5">Learn More</button>
        </div>
      </div>
    </div>
  );
}
