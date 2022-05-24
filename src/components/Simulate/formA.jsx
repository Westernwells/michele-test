import React from "react";
import TypeIceon from "../../assets/TypeIcon.svg";
import IconLeft from "../../assets/arrow-left-icon.svg";
import { navigate } from "gatsby";

export default function FormA() {
  return (
    <div className="container  formA-container position-relative">
      <IconLeft
        className="position-absolute icon-left-botton"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="formA-divider"></div>
      <div className="row mb-60">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0">
              Type
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div class="form-check form-switch">
            <input
              class="form-check-input select-bg"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Specific
            </label>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div class="form-check form-switch">
            <input
              class="form-check-input select-bg"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Aggregate
            </label>
          </div>
        </div>
      </div>
      {/* Row attachment */}
      <div className="row align-items-center mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0">
              Attachment
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <select
            class="form-select form-select-lg mb-3 attachment-select"
            aria-label=".form-select-lg example"
          >
            <option selected>$50K</option>
          </select>
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
      {/* Row 3 attachment */}
      <div className="row align-items-center mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0 text-end">
              # of Spec Claims Paid
              <br /> in Past Year
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <select
            class="form-select form-select-lg mb-3 claims-paid-select"
            aria-label=".form-select-lg example"
          >
            <option selected>
              $1-2
              {/* <span className="badge bg-secondary">Default</span> */}
            </option>
          </select>
        </div>
        <div className="col-4"></div>
      </div>
      {/* Row 4 lasers */}
      <div className="row align-items-center mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0 text-end">
              Lasers
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex gap-2 justify-content-center">
          <button type="button" class="btn btn-lg bg-button-primary">
            Typical lasers
          </button>
          <button type="button" class="btn  btn-lg bg-button-tertiary">
            No lasers
          </button>
        </div>
        <div className="col-4"></div>
      </div>
      {/* Row 5 Exclusions */}
      <div className="row align-items-center mb-41">
        <div className="col-4 ">
          <div className="d-flex gap-5 justify-content-end align-items-center ">
            <p className="d-flex align-items-center align-self-center mb-0 text-end">
              Exclusions
            </p>
            <TypeIceon />
          </div>
        </div>
        <div className="col-4 d-flex gap-2 justify-content-center">
          <button type="button" class="btn btn-lg bg-button-primary">
            Typical exclusions
          </button>
          <button type="button" class="btn  btn-lg bg-button-tertiary">
            No exclusions
          </button>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
