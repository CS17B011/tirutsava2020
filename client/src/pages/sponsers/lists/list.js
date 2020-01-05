import React from "react";
import "./list.css";

export default function List() {
  const sap = {
    margin: "0 0 20px 0",
    textTransform: "none",
    color: "rgba(254, 82, 76, 1)",
    fontWeight: "600",
    letterSpacing: "1px",
    lineHeight: "1.5"
  };
  const italic = {
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold"
  };
  return (
    <div>
      <section id="team" className="team content-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 style={sap}>Our Sponsers</h2>
              <h3 className="caption gray">
                Meet the Sponsers who make our event awesome
              </h3>
            </div>
            <div className="container">
              <div className="row">
                {/* 1 */}
                <div className="col-md-4">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Recusandae asperiores mollitia.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Powered By</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Neque minima ea, a praesentium saepe nihil maxime quod
                          esse numquam explicabo eligendi.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Sponsered By</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Temporibus dolor, quisquam consectetur molestias,
                          veniam voluptatum. Beatae alias omnis totam.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Powered By</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* 1 */}
                <div className="col-md-4">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Recusandae asperiores mollitia.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Powered By</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Neque minima ea, a praesentium saepe nihil maxime quod
                          esse numquam explicabo eligendi.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Sponsered By</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="https://moodi.org/assets/sponsor-img/nivea.png"
                        alt=""
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Temporibus dolor, quisquam consectetur molestias,
                          veniam voluptatum. Beatae alias omnis totam.
                        </p>
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Nivea</h4>
                    <p style={italic}>Powered By</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
