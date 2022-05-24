import React from "react";
import CompanyLogo from "../../assets/company-logo.svg";
import companyLogoPng from "../../images/company-logo.png";
import ArrowUpIcon from "../../assets/arrow-up_icon.svg";
export default function Footer() {
  return (
    <div className="footer-container position-relative">
      <ArrowUpIcon className="position-absolute arrow-up-icon" />
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pb-5 container">
        <div className="col mb-3">
          <img src={companyLogoPng} />
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi tincidunt nibh.
          </p>
          <p className="footer-email-link-text">info@aeglehealthpartners.com</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5 className="footer-menu-header">Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link active">
                Log in
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Simulate Aegle
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                What is Aegle
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                How Aegle Works
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="footer-menu-header">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Our Story
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Aegle Team
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Careers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Support
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link active">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="footer-menu-header">General Conditions</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                Cookies Management
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 footer-menu-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* <div className="container"> */}

      <div className="d-flex  justify-content-between pt-39 pb-56 border-top mt-74">
        <div className="">
          <p className="footer-copyright-text">© 2021 Aegle Health Partners</p>
        </div>
        <div className="">
          <p className="footer-address-text">
            4250 N Fairfax Dr, Ste 600, Arlington, VA 22203
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
