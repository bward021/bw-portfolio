import React from "react";
import profilePicture from "../../../static/assets/images/contact/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "Center",
        }}
      ></div>
      <div className="right-column">
        <div className="contact-name">Brandon Ward</div>
        <div className="contact-info">
          <div>
            <FontAwesomeIcon icon={"male"} />
          </div>
          <div>Software Developer</div>
        </div>
        <div className="contact-info">
          <div>
            <FontAwesomeIcon icon={"phone"} />
          </div>
          <div>385-319-9422</div>
        </div>
        <div className="contact-info">
          <div>
            <FontAwesomeIcon icon={"envelope"} />
          </div>
          <div>bward.sd@gmail.com</div>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/bward-ut/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a href="https://github.com/bward021">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
        </div>
      </div>
    </div>
  );
}
