import React from 'react';
import "./Login.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

const Login = () => {
  const navigate = useNavigate();
  const initialState = {  Email: '', Password: '' }
  const [user, setUser] = useState([]);
  const [data, setData] = useState({});
  const handleChangeInput = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
      e.preventDefault()
      

      axios.get('http://localhost:3000/login').then(e=> {
          setUser(e.data)
      }).catch(e => { console.log(e)

       });

      console.log("data is", user)
      user.filter((value) => {
          if (value.email === data.email && value.password === data.password) {
              localStorage.setItem('login',JSON.stringify(value))
              navigate('/home')
              alert ("Login Successfully")
          } else{
            // alert('Invalid credentials');
          }
      })
  }
  // const [name, setName] = useState({})
  // const da=["Email", "Password"]
  // const submit=() => {
  //   console.log(da);
  //   console.log(data);
  //   axios.post('http://localhost:3000/login', data).then((res)=> {
  //     console.log(res);
  //   }).catch((err)=> {
  //     console.log(err) 
  //   })
//     // axios.get('http://localhost:3000/User').then((res)=>{
//     //   console.log(res);
//     // }).catch((err)=> {
//     //   console.log(err) 
//     // })
//     // axios.put('http://localhost:3000/User/3', data) // Use the correct URL for updating a specific user
//     // .then((res) => {
//     //   console.log('User data updated:', res.data);
//     // })
//     // .catch((err) => {
//     //   console.error('Error updating user data:', err);
//     // });
    
//     // const user= 5;
//     // axios.delete(`http://localhost:3000/User/5`)
//     // .then((res) => {
//     //   console.log('User deleted:', res.data);
   
//     // })
//     // .catch((err) => {
//     //   console.error('Error deleting user:', err);
//     // });
// }
  // const hand = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  //   setData({ ...data, [e.target.name] : e.target.value})
  //   }
  return (
    <>
    {/* <div className='login_page text-center mt-5 pb-5 card' style={{width:"500px", marginLeft:"400px",backgroundColor:"aqua"}}>
      <h1>Login Page</h1>
      <div>
      <label className='form-label '>Email  </label><br/>
      </div>
      <div>
      <input type='email' className='requied' placeholder="Enter Your Email"
      name='email' onChange={hand}></input><br/>
      </div>
      <div>
      <label className='form-label'>Password  </label><br/>
      </div>
      <div>
      <input type='password' className='requied'placeholder="Enter Your Password"
      name='password' onChange={hand}></input><br/>
      </div>
      <div style={{display:'inline'}}>
        <Nav.Link href='/'><button type='button'  onClick={submit} class='btn btn-primary m-2'>Login</button></Nav.Link>
        <Nav.Link href='/signup'><button type='button' class='btn btn-secondary'>Signup</button></Nav.Link>
      </div>
    </div> */}
    <div class="wrapper body">
  <div class="login_box">
    <div class="login-header">
      <span>Login</span>
    </div>

    <div class="input_box">
      <input type="text" id="user" class="input-field"  name='email'  required onChange={handleChangeInput}  />
      <label for="user" class="label">Username</label>
      <i class="bx bx-user icon"></i>
    </div>

    <div class="input_box">
      <input type="password" id="pass" class="input-field" required name='password'  onChange={handleChangeInput}  />
      <label for="pass" class="label">Password</label>
      <i class="bx bx-lock-alt icon"></i>
    </div>

    <div class="remember-forgot">
      <div class="remember-me">
        <input type="checkbox" id="remember"/>
        <label for="remember">Remember me</label>
      </div>

      <div class="forgot">
        <a href="#">Forgot password?</a>
      </div>
    </div>

    <div class="input_box">
    <Nav.Link href='/home'><input type="submit" class="input-submit" onClick={(e) => handleClick(e)} value="Login"/></Nav.Link>
    </div>

    <div class="register">
    <span>Don't have an account? <a href="signup" className='text-danger'>Register</a></span>
    </div>
  </div>
</div>
  </>
  );
};

export default Login;
