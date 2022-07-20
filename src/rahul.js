import React from "react";

export default class Rahul extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
   
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200"
                onClick={e => this.onSubmit(e)}> Submit </button>
      </form>
    );
  }
}