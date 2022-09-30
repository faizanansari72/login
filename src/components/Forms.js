import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleusernameC = this.handleusernameC.bind(this);
    this.handleusernameB = this.handleusernameB.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleusernameC(e) {
    const em = e.target.value;
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email);
  }
  handleusernameB(e) {
    this.setState({
      password: e.target.value,
    });
    console.log(this.state.password);
  }
  signin = async (formData) => {
    await fetch(
      `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json()).then((res)=>{
        if (res.length) {
          alert("Login successfully")
        } else {
          alert("invalid user credentials.");
        }
      })
      .catch((e) => {
        alert("invalid user credentials.");
      });
  };
  handlesubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const formData = {
      email,
      password,
    };
    this.signin(formData);
    // if (email == "admin@gmail.com" && password == "admin@123") {
    //   alert("Thanks! Your form Submitted successfully ");
    //   return;//break
    // }
    // alert("Invalid credentials");
  }

  render() {
    return (
      <div className="firstpage">
        <div className="form-container">
          <h1 className="heading">Login Form</h1>
          <form className="registor-form" onSubmit={this.handlesubmit}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleusernameC}
              className="form-field"
            />

            <input
              type="password"
              placeholder="Enter Your Password"
              value={this.state.password}
              onChange={this.handleusernameB}
              required
              className="form-field"
            />
            <br></br>
            <br></br>

            <button>Signin</button>
            <p className="first">
              Not a member? <Link to="/Register">Sign up</Link>
          
            </p>
            <Link to="/Dashboard">
              Dashboards
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
// const LoginPageWithRouter = withRouter(Forms)
export default Forms;
