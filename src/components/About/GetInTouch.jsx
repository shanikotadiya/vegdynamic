import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="get-in-touch-content">
        <h2>Let’s Connect & Grow Together!</h2>
        <p>
          Looking for reliable fabrication and galvanizing solutions? Or eager
          to join our expert team? We’re here to help!
        </p>
        <div className="buttons">
          <Link href="/contact" legacyBehaviour>
            <button className="btn-discovery">Contact Us</button>
          </Link>
          <Link href="/career" legacyBehaviour>
          <button className="btn-test">Join Our Team</button>
          </Link>
        </div>
      </div>
      {/* <div className="get-in-touch-bg"></div> */}
    </section>
  );
};

export default GetInTouch;
