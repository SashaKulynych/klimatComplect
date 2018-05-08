import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { css, StyleSheet } from "aphrodite";
import "./styles/text.css";

import { connect } from "react-redux";
import { withRouter } from "react-router";

class Text extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="afterHeader">
          <img
            style={{ width: "100%" }}
            src={require("./images/pictureCategory.png")}
            alt=""
          />
        </div>
        <div className="text">
          <p className="col-12 title text-center" style={{ marginTop: 40 }}>
            Відеокурси
          </p>
          <div className="textContainer row">
            <div className="video col">
              <img
                src={require("./images/textImg.png")}
                style={{ width: "100%" }}
              />
              <p>Lorem ipsum dolor sit amet.</p>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nihil.
              </h5>
            </div>
            <div className="video col">
              <img
                src={require("./images/textImg.png")}
                style={{ width: "100%" }}
              />
              <p>Lorem ipsum dolor sit amet.</p>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nihil.
              </h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(state => ({ state: state }))(withRouter(Text));
