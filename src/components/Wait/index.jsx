import React from "react";
import LoadingIcon from "../../assets/loading.svg";
export default function index() {
  return (
    <div className="container wait-container">
      <h1 className="result-text text-center">
        Sit tight while we fetch your data
      </h1>
      <div className="container">
        <div className="chatBubbleContainer">
          <div className="chatBubble">
            <p className="chatBubble-text">
              Did you know that Aegle is based on techniques{" "}
              <span className="" style={{ fontWeight: "600" }}>
                currently used by some BUCAs for their fully-funded populations?
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="loading-icon-container">
          <LoadingIcon className="loading-icon" />
        </div>
        <div className="chatBubbleContainerX">
          <div className="chatBubbleX">
            <p className="chatBubble-text">
              Did you know that Aegle is based on techniques{" "}
              <span className="" style={{ fontWeight: "600" }}>
                currently used by some BUCAs for their fully-funded populations?
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="progress col-4 mx-auto px-0">
          <div
            class="progress-bar progress-bar-bg"
            role="progressbar"
            style={{ width: "53%" }}
            ariaValueNow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <p className="text-center result-percentage mt-3">53%</p>
        <p className="text-center result-arrival mt-2">
          Estimated time to completion: 1:23
        </p>
      </div>
    </div>
  );
}
