import './components/style.css'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import { useState } from 'react'
import home from "../Home"



const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
    if (username !== "" && password !== "") {
      axios({
        method: 'POST',
        url: 'http://localhost:7000/signin/',
        data:{
          username: username,
          password: password,
        }
      }).then((result) => {
            console.log(result)
            if(result.data.state==="200"){
              alert("登入成功!");
              window.location.href = "../";
          }
            else if(result.data.state === '500'){
              alert("帳號密碼錯誤")
            }
      });
    } else if (username === "") {
      alert("請輸入帳號!");
    } else {
      alert("請輸入密碼!");
    }
  };
    return (
        <div className='login' >
            <div>        
                <h1>會員登入</h1>
            </div>
            <div>
                <p>帳號: <input id="userName" name="userName" placeholder="請輸入帳號" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}  ></input></p>
            </div>
            <div>
                <p>密碼:  <input id="password" name="password" type='password'  placeholder='請輸入密碼' value={password} onChange={(e) => {setPassword(e.target.value)}}></input></p>
            </div>
            <div>
            <button onClick={login} className='button-ex1'>登入</button>
            <nav>
                <li><Link to="/member/register">註冊</Link></li>
            </nav>
            </div>
        </div>
    )
}
        



export default Login
