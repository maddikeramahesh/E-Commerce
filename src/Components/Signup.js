import React from "react";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Signup.css";

const Signup = () => {
    const [data, setData] = useState({})
    const da=["First Name", "Last Name", "Mobile Number", "Email", "Password", "Re-Enter Password",]
    const submit=() => {
      console.log(da);
      console.log(data);
      axios.post('http://localhost:3000/signup', data).then((res)=> {
        console.log(res);
      }).catch((err)=> {
        console.log(err) 
      })
      // axios.get('http://localhost:3000/User').then((res)=>{
      //   console.log(res);
      // }).catch((err)=> {
      //   console.log(err) 
      // })
      // axios.put('http://localhost:3000/User/3', data) // Use the correct URL for updating a specific user
      // .then((res) => {
      //   console.log('User data updated:', res.data);
      // })
      // .catch((err) => {
      //   console.error('Error updating user data:', err);
      // });
      
      // const user= 5;
      // axios.delete(`http://localhost:3000/User/5`)
      // .then((res) => {
      //   console.log('User deleted:', res.data);
     
      // })
      // .catch((err) => {
      //   console.error('Error deleting user:', err);
      // });
  }
    const signup = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);
      setData({ ...data, [e.target.name] : e.target.value})
      }
  return (
    <>
    <div class="wrap boy">
  <div class="logbox">
    <div class="logheader">
      <span>Register</span>
    </div>
   <div class="row" style={{display:"flex", justifyContent:'space-between'}}>
    <div class="input col-6">
      <input type="text" id="user" class="input-field" required name='first name' onChange={signup} />
      <label for="user" class="label">First Name</label>
      <i class="bx bx-user icon"></i>
    </div>
    <div class="input col-6">
      <input type="text" id="user" class="input-field" required  name='last name' onChange={signup} />
      <label for="user" class="label">Last Name</label>
      <i class="bx bx-user icon"></i>
    </div>
  </div>
  <div class="row" style={{display:"flex", justifyContent:'space-between'}}>
    <div class="input col-6">
      <input type="text" id="user" class="input-field" required name='mobile number' onChange={signup} />
      <label for="user" class="label">Mobile Number</label>
      <i class="bx bx-mobile icon"></i>
    </div>
    <div class="input col-6">
      <input type="text" id="user" class="input-field" required name='email' onChange={signup} />
      <label for="user" class="label">Email</label>
      <i class="bx bx-user icon"></i>
    </div>
  </div>
    <div class="row" style={{display:"flex", justifyContent:'space-between'}}>
    <div class="input col-6">
      <input type="password" id="pass" class="input-field" required  name='password' onChange={signup} />
      <label for="pass" class="label">Password</label>
      <i class="bx bx-lock-alt icon"></i>
    </div>
    <div class="input col-6">
      <input type="password" id="pass" class="input-field" required name='re-enter password' onChange={signup} /> 
      <label for="pass" class="label">Re-Enter Password</label>
      <i class="bx bx-lock-alt icon"></i>
    </div>
  </div>
    <div class="input">
      {/* <input type="submit" class="input-submit" value="Create Account" /> */}
      <Nav.Link href="/" onClick={submit}><button type="submit" class="input-submit btn-info" value="Create Account">Create Account</button></Nav.Link>
    </div>
  </div>
</div>
    {/* <div className="pt-5" style={{backgroundColor:"white", width:"100%", height:"100%"}} >
      <div
        className="text-center card p-3"
        style={{ width: "850px", marginLeft: "250px", backgroundColor:"#9FE2BF" }}
      >
        <h1 className="text-center p-3">Create a New Account</h1>
        <div className="row">
          <div className="col-3">
            <label>First Name : </label>
          </div>
          <div className="col-3">
            <input type="text" name='first name' onChange={signup}></input>
          </div>
          <div className="col-3">
            <label>Last Name : </label>
          </div>
          <div className="col-3">
            <input type="text" name='last name' onChange={signup}></input>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-3">
            <label>Mobile Number :</label>
          </div>
          <div className="col-3">
            <input type="number" name='mobile number' onChange={signup}></input>
          </div>
          <div className="col-3">
            <label>Email :</label>
          </div>
          <div className="col-3">
            <input type="email" name='email' onChange={signup}></input>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-3">
            <label>Password :</label>
          </div>
          <div className="col-3">
            <input type="password" name='password' onChange={signup}></input>
          </div>
          <div className="col-3">
            <label>Re-Enter Password :</label>
          </div>
          <div className="col-3">
            <input type="re-password" name='re-enter password' onChange={signup}></input>
          </div>
        </div>
        <div>
            <Nav.Link href="/login" onClick={submit}><button className="btn btn-primary m-3 col-5">Submit</button></Nav.Link>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Signup;
