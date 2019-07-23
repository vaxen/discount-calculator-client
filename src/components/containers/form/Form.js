import React, { Component } from "react";
import Button from "../../button/Button";
import Input from "../../input/Input";
import "./Form.scss";
import Label from "../../label/Label";

export class Form extends Component {
  render() {
    return (
      <form className="bg-light">
        <div className="form-group row p-3">
          <Label />
          <div class="col-sm-10">
            <Input />
          </div>
        </div>
        <div className="form-group row p-3">
          <Label />
          <div class="col-sm-10">
            <Input />
          </div>
        </div>
        <div className="form-group row p-3">
          <Label />
          <div class="col-sm-10">
            <Input />
          </div>
        </div>
        <div class="col-sm p-3">
          <Button />
        </div>
      </form>
    );
  }
}
