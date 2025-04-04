import { useState } from "react";
import Link from "next/link";
import OpeaningsArea from "../Openings/OpeningArea";
export default function Form() {
  const [filename, setFileName] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file.name);

      setFileName(file.name); // Set only the file name in state
    }
  };

  return (
    <div>
      <OpeaningsArea />
      <section className="contact__area-2">
        <div className="container">
          <div className="contact__form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section__wrapper mb-45">
                    <h4 className="section__title">Apply Now</h4>
                    <div className="r-text">
                      <span>Form</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <form id="contact-form" action="" method="POST">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-filed mb-20">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name here"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-mail mb-20">
                          <input
                            email="text"
                            name="email"
                            placeholder="Enter email address here"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-number mb-20">
                          <input
                            type="number"
                            name="name"
                            placeholder="Enter your number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-mail mb-20">
                          <select name="" id="">
                            <option value="" hidden>
                              Select Designation
                            </option>
                            <option value="">Solidworks Design Engineer</option>
                            <option value="">Marketing</option>
                            <option value="">Store keeper</option>
                            <option value="">Purchase Manager</option>
                            <option value="">Other (mention profile in Cover Letter)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="contact-filed contact-icon-message mb-25">
                      <textarea
                        placeholder="Cover letter"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="contact-filed contact-icon-file mb-25">
                          <input
                            type="file"
                            id="fileUpload"
                            className="fileinput"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                          <label htmlFor="fileUpload" className="fileinput">
                            {filename ? filename : "Upload Resume"}
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="contact-filed contact-icon-captcha mb-25">
                          <input type="text" placeholder="enter a captcha" />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <img src="" alt="captcha" />
                      </div>
                    </div>
                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                      <input
                        name="checkbox"
                        className="e-check-input"
                        type="checkbox"
                        id="e-agree"
                      />
                      <label className="e-check-label" htmlFor="e-agree">
                        I agree to the
                        <Link href="/contact">Terms &amp; Conditions</Link>
                      </label>
                    </div>
                    <div className="form-submit text-center">
                      <button className="tp-btn" type="submit">
                        Apply Now
                      </button>
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
