import React, { Component } from "react";
import axios from "axios";
import Button from "../../button/Button";
import Input from "../../input/Input";
import "./Form.scss";
import Label from "../../label/Label";

export class Form extends Component {
  state = {
    users: [],
    submitButtonLabel: "Submit",
    inputPlaceholder: "insert value",
    percentageLabel: "percentage",
    customersLabel: "customers",
    amount: "amount"
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(response => {
        const usersUpdated = response.data.map(user => {
          return { id: user._id, name: user.name, isActive: user.isActive };
        });
        this.setState({ users: usersUpdated });
        console.log(this.state.users);
      })
      .catch(err => {
        console.log(err.data);
      });
  }

  render() {
    /*
    const users = this.state.users.map(user => {
      return <Label labelValue={user.name} />;
    });
    */
    let {
      submitButtonLabel,
      inputPlaceholder,
      percentageLabel,
      customersLabel,
      amount
    } = this.state;

    return (
      <form className="bg-light p-3">
        <div className="form-group">
          <Label labelValue={percentageLabel} />
          <div className="col-sm-10">
            <Input inputPlaceholder={inputPlaceholder} />
          </div>
        </div>
        <div className="form-group">
          <Label labelValue={customersLabel} />
          <div className="col-sm-10">
            <Input inputPlaceholder={inputPlaceholder} />
          </div>
        </div>
        <div className="form-group">
          <Label labelValue={amount} />
          <div className="col-sm-10">
            <Input inputPlaceholder={inputPlaceholder} />
          </div>
        </div>
        <div className="col-sm">
          <Button submitLabel={submitButtonLabel} />
        </div>
      </form>
    );
  }
}
