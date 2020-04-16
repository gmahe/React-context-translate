import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Field extends Component {
  static contextType = LanguageContext;

  render() {
    this.text = this.context.language === "english" ? "Name" : "Nom";
    return (
      <div className="ui field">
        <label>{this.text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
