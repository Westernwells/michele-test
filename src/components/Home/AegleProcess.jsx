import React from "react";
import AegleProcessCard from "./AegleProcessCard";
import AegleSimulateProcessCard from "./AegleSimulateProcessCard";
import AegleWorkProcessCard from "./AegleWorkProcessCard";
export default function AegleProcess() {
  return (
    <div className="container ap-container">
      <AegleProcessCard />
      <div className="ap-divider d-flex justify-space-center"></div>
      <AegleWorkProcessCard
        right={true}
        title="How Aegle Works"
        content="See an illustrative example"
      />
      <div className="ap-divider d-flex justify-space-center"></div>
      <AegleSimulateProcessCard />
    </div>
  );
}
