import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
 

 
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:"",
       lastname :"",
       email:"",
       password: ""
    }
    this.handleusernameA=this.handleusernameA.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)

    this.handleusernameC=this.handleusernameC.bind(this)
    this.handleusernameD=this.handleusernameD.bind(this)

  }
  handleusernameA(e){
    this.setState({
      firstname:e.target.value,
    
    
    })
    console.log(this.state.firstname)
  }
  handleusernameB(e){
    this.setState({
  lastname:e.target.value
    })
    console.log(this.state.lastname)
  }

  handleusernameC(e){
    this.setState({
     email:e.target.value
    })
    console.log(this.state.email)
  }

  handleusernameD(e){
    this.setState({
  password:e.target.value
    })
    console.log(this.state.lastname)
  }
  resetform = () => {
    this.setState({
      email: "",
      password: "", 
      firstname: "", 
      lastname: ""
    });
  }
// calling api using fetch method of javascript
  addUser = async (formData) => {
    await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    }).then(()=> {
      this.resetform()
      alert("Registered successfully.")
    }).catch((e) => {
      alert("something went wrong.")
    })
  }
  handlesubmit = (e) => {
      e.preventDefault();
      const { email, password, firstname, lastname } = this.state;
      const formData = {
        email, password, firstname, lastname
      }
      this.addUser(formData);
  }
 
  render() {
    return (
      <div className='secondpage'>
      <div className='form-container'>
        <h1 className='heading'>Registratiom Form</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>
         <label>Firstname:</label>
          <input type="text" placeholder='Enter Your First Name' value={this.state.firstname} onChange={this.handleusernameA} required  className="form-field" />
   

          <label>Lastname:</label>
          <input type="text" placeholder='Enter Your Last Name' value={this.state.lastname} onChange={this.handleusernameB}  required className="form-field"  />
   


          <label> Email-id:</label>
          <input type="email" placeholder='Enter Your Email' value={this.state.email} onChange={this.handleusernameC} required className="form-field"  />
         
          <label> Password:</label>
          <input type="password" placeholder='Enter Your Password' value={this.state.password} onChange={this.handleusernameD}  required className="form-field"  />

          <br></br>
          <br></br>
        
          <button>Submit</button>
          <Link to="/" className='secondary'>Goto-Home</Link>
        </form>
      </div>
      </div>
    )
  }
}