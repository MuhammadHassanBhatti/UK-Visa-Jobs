import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid footer-bg py-5">
      <div className="footer-text container">
        <div>
          <h5>Uk Visa Jobs</h5>
          <ul className="support-section">
            <li>
              <i className="fas">
                <FontAwesomeIcon icon={faMapMarker} />
              </i>
              Kemp House,152-160 City Road,London,EC1V 2NX
            </li>
            <li>
              <i className="fas">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              Support@Ukvisajobs.Com
            </li>
            <li>
              <i className="fas">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              0112-345-345-5544
            </li>
          </ul>

          <hr></hr>

          <div className="policy">
            <ul className="terms-conditions">
              <li>Privacy Policy</li>
              <li>Terams & Conditions</li>
              <li>Support</li>
            </ul>

            <ul className="copy-right">
              <li>
                <i className="fas">
                  <FontAwesomeIcon icon={faCopyright} />
                </i>
                Copyright 2024,All Right Reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
