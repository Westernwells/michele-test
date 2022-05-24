import React from "react";
import CompanyLogo from "../../assets/company-logo.svg";
export default function Navbar() {
  return (
    <div className="container">
      <header className="d-flex align-items-center justify-content-center py-3 mb-4">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <CompanyLogo />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="#"
              className="nav-link px-2 link-secondary nav-right-margin navbar-secondary-link"
            >
              What is Aegle
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link px-2 link-dark nav-right-margin navbar-secondary-link"
            >
              How Aegle Works
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link px-2 link-dark nav-right-margin navbar-secondary-link"
            >
              Why Aegle Works
            </a>
          </li>
          <li>
            <a
              href="/simulate"
              className="nav-link px-2 link-dark nav-right-margin navbar-secondary-link"
            >
              Simulate Aegle{" "}
              <span class="badge bg-secondary badge-secondary">Beta</span>
            </a>
          </li>
          <li>
            {" "}
            <a
              class="nav-link dropdown-toggle nav-right-margin link-dark navbar-secondary-link "
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Aegle
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="buttonFullOrgMainSec yellow-tint">
            Contact us
          </button>
          <button type="button" className="buttonFullOrgMain">
            Login to Aegle
          </button>
        </div>
      </header>
    </div>
  );
}
