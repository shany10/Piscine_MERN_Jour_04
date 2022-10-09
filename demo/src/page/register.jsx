import React, {useState} from 'react';
import Axios from 'axios';
import { Route, Redirect } from 'react-router'

function Register() {

  const register = document.getElementById('register');

  const[data , setData] = useState({
    login:"",
    email:"",
    password:"",
    password_confirm:""
  })

  function sendData(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e) {
    e.preventDefault();

    if(data.login.length < 5 || data.login.length > 20) {
      const login_message = document.getElementById("login_message")
      login_message.innerText = " votre login est invalide"
      return;
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!data.email.match(regex)) {
      const email_message = document.getElementById("email_message")  
      email_message.innerText = " votre email est invalide" 
      return;
    }

    // Axios.post("http://localhost:4242/findEmail" , {
    //   email: data.email,
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     if(res.data == "") {
    //       alert("shany")
    //     }
    //     return;
    //   })
    

    if(data.password !== data.password_confirm) {
      const password_confirm_message = document.getElementById("password_confim_message")  
      password_confirm_message.innerText = " votre mot depasse ne correspond pas " 
      return;
    };
    
    Axios.post("http://localhost:4242/saveRegister" , {
    login: data.login,
    email: data.email,
    password: data.password,
    })
    .then(res => {
      localStorage.setItem("login" , data.login)
      window.location.href = '/home'
    })
  }

  return (
      <div className="App-header">
        <form method="post" action='/home' onSubmit={(e)=>submit(e)}>
        <label for="login">login :</label><br/>
        <input type="login" name="login" id='login' value={data.login} onChange={(e)=>sendData(e)} placeholder="login" required></input>
        <span id="login_message"></span><br/>
        <label for="email">email :</label><br/>
        <input type="email" name="email" id='email' value={data.email} onChange={(e)=>sendData(e)} placeholder="email" required></input>
        <span id="email_message"></span><br/>
        <label for="pwd">password :</label><br/>
        <input type="password" name="password" id='password' value={data.password} onChange={(e)=>sendData(e)} placeholder="password" required></input>
        <span id="password_message"></span><br/>
        <label for="confirm_pwd">password confirm :</label><br/>
        <input type="password" name="confirm_pwd" id='password_confirm' value={data.password_confirm} onChange={(e)=>sendData(e)} placeholder="confirm your password" required></input>
        <span id="password_confim_message"></span><br/>
        <input type="submit" value="save"></input>
        <button><a href="/login">login</a></button>
    </form>
      </div>
  );
}

export default Register;