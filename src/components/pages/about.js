import React from "react";
import profilePicture from "../../../static/assets/images/about/profilepicture.jpg";

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
        <p>
          Hey there, my name is Brandon! I have come to learn that we live in a
          day and age where things are changing. Constantly! Now, some people
          would take a look at that statement and have an instant flood of
          negative emotion. <b>NOT ME!</b>
        </p>
        I revel in the thought of change, because change means growth. If we are
        stuck in the everyday rhythm of the "Box" that is called complacency, we
        can never be more than who we are. I am constantly looking to be more!
        To learn more, to grow more and to better myself every single day.
        <p>
          I am currently looking to work for a company that will help me be a
          better version of me. Who in return will recieve a very motivated and
          passionate employee. I work until the work is done and know that I can
          be a benefit to you and your company!
        </p>
      </div>
    </div>
  );
}
