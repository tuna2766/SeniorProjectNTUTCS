import './components/style.css'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import { useState } from 'react'
import home from "../Home"



const Login = () => {
    const [ID, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
    if (ID !== "" && password !== "") {
      axios({
        method: 'POST',
        url: 'http://localhost:7000/signin/',
        data:{
          username: ID,
          password: password,
        }
      }).then((result) => {
            console.log(result)
            if(result.data.state==="200"){        
              window.sessionStorage.setItem('userName',result.data.userName)
              window.sessionStorage.setItem('password',result.data.password)
              window.sessionStorage.setItem('email',result.data.email)
              window.sessionStorage.setItem('Phone_number',result.data.Phone_number)
              window.sessionStorage.setItem('Fishing_boat_name',result.data.Fishing_boat_name)
              window.sessionStorage.setItem('Fishing_area',result.data.Fishing_area)
              window.sessionStorage.setItem('Fishing_License_Number',result.data.Fishing_License_Number)

              alert("登入成功!");
              window.location.href = "../";
          }
            else if(result.data.state === '500'){
              alert("帳號密碼錯誤")
            }
      });
    } else if (ID === "") {
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
                <p>帳號: <input id="ID" name="ID" placeholder="請輸入帳號" type="text" value={ID} onChange={(e) => {setUsername(e.target.value)}}  ></input></p>
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
