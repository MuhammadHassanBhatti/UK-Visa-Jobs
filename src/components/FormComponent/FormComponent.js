import React from "react";
import bannerImg from "../../assets/static/images/agency.png";

const FormComponent = () => {
  return (
    <>
      <div className="parent-Class">
        <div className="container-fluid" style={{}}>
          <div
            className="bg-div"
            style={{
              minHeight: "100vh",
              background: "/f8f7fc",
            }}
          >
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 main-col-class">
                <div
                  className="img-parent"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img
                    src={bannerImg}
                    className="banner-img-class"
                    alt="banner"
                    style={{ width: "350px", height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div
                  className="form-class my-3 me-4 card"
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    flexDirection: "column",
                    border: "none",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    className=" card-class"
                    style={{
                      width: "100%",
                      minHeight: "94vh",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      border: "none",

                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div className="card-title">
                      <h4>Sign In</h4>
                      <p
                        style={{
                          color: "/99A1B7",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Your Social Campaigns
                      </p>
                    </div>

                    <form className="w-100">
                      <input
                        type="email"
                        style={{ background: "/fff" }}
                        placeholder="Email"
                        className="form-control w-100 mb-3"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control w-100"
                      />
                      <div className="forgot-password-btn mt-1 text-end">
                        <a
                          href="/"
                          target="/blank"
                          style={{
                            color: "/056ee9",
                            fontWeight: "500",
                            fontSize: "12px",
                            textDecoration: "none",
                          }}
                        >
                          Forgot Password ?
                        </a>
                      </div>
                      <button className="btn btn-primary w-100 mt-4">
                        Sign In
                      </button>
                    </form>
                    <div className="member-btn mt-4 mb-3 text-center">
                      <span
                        style={{
                          fontSize: "13px",
                          color: "/99A1B7",
                          fontWeight: "600",
                        }}
                      >
                        Not a Member yet? &nbsp;
                      </span>
                      <a
                        href="/"
                        target="/blank"
                        style={{
                          color: "/056ee9",
                          fontSize: "13px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                      >
                        Sign Up
                      </a>
                    </div>
                    <div className="footer w-100 d-flex justify-content-center align-item-center, flex-column mt-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="english-language-btn d-flex">
                            <div class="btn-group">
                              <button
                                type="button"
                                class="btn btn-primary dropdown-toggle toggle-class"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                              >
                                Action
                              </button>
                              <ul class="dropdown-menu">
                                <li>
                                  <a class="dropdown-item" href="/">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="/">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="/">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-divider" href="/">
                                    {" "}
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="/">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="terms-list  d-flex justify-content-center align-item-center, flex-column">
                            <ul
                              className="ul-class w-100 "
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "13px",
                                  fontWeight: "500",
                                  paddingTop: "10px",
                                  color: "/056EE9",
                                }}
                              >
                                Terms
                              </li>
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "13px",
                                  fontWeight: "500",
                                  paddingTop: "10px",
                                  color: "/056EE9",
                                }}
                              >
                                Plans
                              </li>
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "13px",
                                  fontWeight: "500",
                                  paddingTop: "10px",
                                  color: "/056EE9",
                                }}
                              >
                                Contact Us
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
