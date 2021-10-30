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
              <div>
                <img
                  style={{ width: "150px" }}
                  src="https://i.ibb.co/4WHk98C/Logo-Makr-77iqbf.png"
                  alt=""
                />
              </div>
              <p className="text-start mt-1 ">
                Travel and tourism provide services of all types for both
                inbound and outbound travellers, and have become one of the
                world's fastest growing industries. International travel and
                tourism are the world's largest export earner and an important
                factor in the balance of payments of most nations.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Contact use</h5>
              <small>Refresh yourself</small> <br />
              <small>Email: info@us.ry.com</small> <br />
              <small>Address: 77/2 street(12th Floor), </small> <br />
              <small>99 New Streat Road, Newyork C/A, us -1212.</small> <br />
              <small>Phone: 09610500599 </small> <br />
              <small> Phone: 02 9858538 </small> <br />
              <small>Phone: 9614500599</small> <br />
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Company</h5>
              <Link to="/">About us</Link> <br />
              <Link to="/">Blog </Link> <br />
              <Link to="/">Services</Link> <br />
              <Link to="/">Add your plan</Link> <br />
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
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Ffb.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Flinkedin.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 ">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Ftwitter.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Finsta.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrigtText p-3 text-white">
        &copy; All copyright Terms & conditions are reserved by Click Medic
      </div>
    </>
  );
};

export default Footer;
