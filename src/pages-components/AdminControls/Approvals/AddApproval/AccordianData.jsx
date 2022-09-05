import React, { Component } from "react";

import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader, Collapse, Button } from "reactstrap";
// import { Link } from "react-router-dom";
export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [true, false, false, false, false],
    };
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  }

  render() {
    return (
      <>
        <div className="accordion mb-5">
          <Card
            style={{ borderRadius: "0" }}
            className={clsx("card-box", {
              "panel-open": this.state.accordion[0],
            })}
          >
            <Card style={{ borderRadius: "0" }}>
              <CardHeader>
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      color="link"
                      size="lg"
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => this.toggleAccordion(0)}
                      aria-expanded={this.state.accordion[0]}
                    >
                      <span>Personal</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-up"]}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[0]}>
                <div className="p-4">
                  <p className="editing">Employee #</p>
                  <p className="editing">First Name</p>
                  <p className="editing">Last Name</p>
                  <p className="editing">Last</p>
                  <p className="editing">Birth Date</p>
                  <p className="editing">Gender</p>
                  <p className="editing">Marital Status</p>
                  <p className="editing">Country</p>
                  <p className="editing">City</p>
                  <p className="editing">Work Email</p>
                  <p className="editing">Mobile Phone</p>
                </div>
              </Collapse>
            </Card>
          </Card>
          <Card
            className={clsx("card-box", {
              "panel-open": this.state.accordion[1],
            })}
          >
            <Card style={{ borderRadius: "0" }}>
              <CardHeader>
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      color="link"
                      size="lg"
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => this.toggleAccordion(1)}
                      aria-expanded={this.state.accordion[1]}
                    >
                      <span>Job</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-up"]}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[1]}>
                <div className="p-4">
                  <p className="editing">Employee #</p>
                  <p className="editing">First Name</p>
                  <p className="editing">Last Name</p>
                  <p className="editing">Last</p>
                  <p className="editing">Birth Date</p>
                  <p className="editing">Gender</p>
                  <p className="editing">Marital Status</p>
                  <p className="editing">Country</p>
                  <p className="editing">City</p>
                  <p className="editing">Work Email</p>
                  <p className="editing">Mobile Phone</p>
                </div>
              </Collapse>
            </Card>
          </Card>
          <Card
            className={clsx("card-box", {
              "panel-open": this.state.accordion[2],
            })}
          >
            <Card style={{ borderRadius: "0" }}>
              <CardHeader>
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      color="link"
                      size="lg"
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => this.toggleAccordion(2)}
                      aria-expanded={this.state.accordion[2]}
                    >
                      <span>Benifits</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-up"]}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[2]}>
                <div className="p-4">
                  <p className="editing">Employee #</p>
                  <p className="editing">First Name</p>
                  <p className="editing">Last Name</p>
                  <p className="editing">Last</p>
                  <p className="editing">Birth Date</p>
                  <p className="editing">Gender</p>
                  <p className="editing">Marital Status</p>
                  <p className="editing">Country</p>
                  <p className="editing">City</p>
                  <p className="editing">Work Email</p>
                  <p className="editing">Mobile Phone</p>
                </div>
              </Collapse>
            </Card>
          </Card>
          <Card
            className={clsx("card-box", {
              "panel-open": this.state.accordion[3],
            })}
          >
            <Card style={{ borderRadius: "0" }}>
              <CardHeader>
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      color="link"
                      size="lg"
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => this.toggleAccordion(3)}
                      aria-expanded={this.state.accordion[3]}
                    >
                      <span>Assets</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-up"]}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[3]}>
                <div className="p-4">
                  <p className="editing">Employee #</p>
                  <p className="editing">First Name</p>
                  <p className="editing">Last Name</p>
                  <p className="editing">Last</p>
                  <p className="editing">Birth Date</p>
                  <p className="editing">Gender</p>
                  <p className="editing">Marital Status</p>
                  <p className="editing">Country</p>
                  <p className="editing">City</p>
                  <p className="editing">Work Email</p>
                  <p className="editing">Mobile Phone</p>
                </div>
              </Collapse>
            </Card>
          </Card>
          <Card
            className={clsx("card-box", {
              "panel-open": this.state.accordion[4],
            })}
          >
            <Card style={{ borderRadius: "0" }}>
              <CardHeader>
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      color="link"
                      size="lg"
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => this.toggleAccordion(4)}
                      aria-expanded={this.state.accordion[4]}
                    >
                      <span>Notes</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-up"]}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[4]}>
                <div className="p-4">
                  <p className="editing">Employee #</p>
                  <p className="editing">First Name</p>
                  <p className="editing">Last Name</p>
                  <p className="editing">Last</p>
                  <p className="editing">Birth Date</p>
                  <p className="editing">Gender</p>
                  <p className="editing">Marital Status</p>
                  <p className="editing">Country</p>
                  <p className="editing">City</p>
                  <p className="editing">Work Email</p>
                  <p className="editing">Mobile Phone</p>
                </div>
              </Collapse>
            </Card>
          </Card>
        </div>
      </>
    );
  }
}
