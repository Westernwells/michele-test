import React from "react";
import Graph from "../../assets/graph_homepage.svg";
export default function Hero() {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <h1 className="hero-header text-center mb-5">
          Simulate how Aegle compares to <br />
          traditional stop-loss
        </h1>
        <p className="text-center text-white">See how much Aegle could save</p>
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
