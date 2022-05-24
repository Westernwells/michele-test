import React from "react";
import TypeIceon from "../../assets/TypeIcon.svg";
export default function FormB() {
  return (
    <div className="container formB-container position-relative">
      <div className="formB-divider"></div>
      {/* Row 1 lPepm */}
      <div className="row align-items-center mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0 text-end">
              Current Annual Stop-loss <br />
              Premium (PEPM)
            </p>
            <TypeIceon />
          </div>
        </div>

        <div className="col-4 ">
          <div className="d-flex justify-content-center mb-3">
            <button
              type="button"
              class="btn  btn-lg align-self-center bg-button-tertiary"
            >
              {" "}
              Standard Market Pricing
            </button>
          </div>
          <div className="d-flex gap-2 justify-content-center">
            <button type="button" class="btn  btn-lg bg-button-tertiary">
              Typical lasers
            </button>
            <button type="button" class="btn  btn-lg bg-button-primary">
              No lasers
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      {/* Row attachment */}
      <div className="row align-items-start mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0">
              Yearly Premium <br />
              (PEPM)
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex flex-column  align-items-center">
          <select
            class="form-select form-select-lg mb-3 attachment-select"
            aria-label=".form-select-lg example"
          >
            <option selected>$50K</option>
          </select>
          <label htmlFor="" className="">
            Spec Premium: $240,000
          </label>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <select
            class="form-select form-select-lg mb-3 attachment-select"
            aria-label=".form-select-lg example"
          >
            <option selected>$110K</option>
          </select>
        </div>
      </div>
    </div>
  );
}
