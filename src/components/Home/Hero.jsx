import React from "react";
import Graph from "../../assets/graph_homepage.svg";
export default function Hero() {
  return (
    <>
      <div class=" px-4 py-5">
        <div class="row align-items-center g-5 py-5">
          <div class=" hero-left-container col-lg-6">
            <h1 className="hero-header">
              Stop-loss reinsurance hasn’t changed in decades.
              <br />
              <span className="">We are fixing that.</span>
            </h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className="buttonFullOrgMain">Contact us</button>
              <button className="buttonFullOrgMainSec">Learn More</button>
            </div>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <Graph className="hero-bg my-responsive-img" />
          </div>
        </div>
      </div>
      {/* <div className='container'>
            <div className="row d-flex">

            <div className="left col">
                <h1 className="hero-header">Stop-loss reinsurance hasn’t changed in decades.
                    <br /><span className="">We are fixing that.</span></h1>
                <div className="d-flex gap-5">
                    <button className="buttonFullOrgMain">Contact us</button>
                    <button className="buttonFullOrgMainSec">Learn More</button>
                </div>
            </div>
            <div className="right col "><Graph className="hero-bg"/></div>
            </div>
        </div> */}
    </>
  );
}
