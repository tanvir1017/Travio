import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerBackground p-5">
        <div className="container">
          <div className="row">
            <div className="container col-md-3 col-lg-3 col-sm-12">
              <p className="text-start mt-2 ">
                Click Medic (known globally as BIMA) uses mobile technology to
                deliver affordable insurance and health products to underserved
                consumers and their families in emerging markets.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Contact use</h5>
              <small>Click Medic BANGLADESH LTD</small> <br />
              <small>Email: info@bd.milvik.com</small> <br />
              <small>Address: AMBON Complex (12th Floor), </small> <br />
              <small>
                99 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka-1212.
              </small>{" "}
              <br />
              <small>Phone: +8809610500599 </small> <br />
              <small> Phone: +88 02 9858538 </small> <br />
              <small>Phone: +8809614500599</small> <br />
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Company</h5>
              <Link to="/about-us">About us</Link> <br />
              <Link to="/">Product </Link> <br />
              <Link to="/">Services</Link> <br />
              <Link to="/">Contact us</Link> <br />
              <Link to="/">Consumer satisfaction</Link> <br />
              <Link to="/">Privacy policy</Link> <br />
              <Link to="/">Terms & conditions</Link> <br />
              <Link to="/faq">FAQ</Link> <br />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 text-start">
              <div className="row">
                <h3 className="footerAlert mt-3 mb-4 shadow text-start">
                  Follow us on
                </h3>
                <div className="col-md-7 col-lg-7 col-12">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Ffb.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Flinkedin.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Ftwitter.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Finsta.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-12"></div>
              </div>
              <div className="row mt-3">
                <h5 className="alert alert-danger fw-bold mt-3">We Accept</h5>
                <div className="col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="40px"
                        src="https://milvikbd.com/_next/image?url=%2FUpay.png&w=128&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="60px"
                        src="https://milvikbd.com/_next/image?url=%2FBKash.png&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="70px"
                        src="https://milvikbd.com/_next/image?url=%2FNagad.png&w=256&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="50px"
                        src="https://milvikbd.com/_next/image?url=%2Fdutch-bangla-rocket-logo.png&w=256&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-3 text-white">
        &copy; All copyright Terms & conditions are reserved by Click Medic
      </div>
    </>
  );
};

export default Footer;
