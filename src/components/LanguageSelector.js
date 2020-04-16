import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag uk"
          onClick={() => this.context.onLanguageChange("english")}
        ></i>
        <i
          className="flag fr"
          onClick={() => this.context.onLanguageChange("french")}
        ></i>
      </div>
    );
  }
}
