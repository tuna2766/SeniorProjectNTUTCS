import {useState } from 'react'
import axios from 'axios'
import { useNavigate as navigate } from "react-router-dom";


import "./components/style.css"

const Register = () => {   


    const [ID,setID] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Phone_number,setPhone] = useState('')
    const [Fishing_boat_name,setBoat] = useState('')
    const [Fishing_area,setArea] = useState('')
    const [Fishing_License_Number,setLicense] = useState('')


    

    const send = (e) =>{
        if (ID === "") {
            alert("請輸入帳號!");
          } else if (email === ""){
            alert("請輸入信箱!");
          }
        else if (password=== ""){
            alert("請輸入密碼!");
          }
        else if (Phone_number=== ""){
          alert("請輸入電話號碼!");
        }
        else if (Phone_number.length !== 10){
            alert("電話號碼輸入錯誤!");
          }
        else if (Fishing_boat_name=== ""){
          alert("請輸入漁船名稱!");
        }
        else if (Fishing_area=== ""){
          alert("請輸入漁船作業區域!");
        }
        else if (Fishing_License_Number=== ""){
            alert("請輸入許可證號碼!");
          }

        else{
            axios({
            method: 'POST',
            url: 'http://localhost:7000/register/',
            data:{
                email: email,
                username: ID,
                password: password,
                Phone_number : Phone_number,
                Fishing_boat_name:Fishing_boat_name,
                Fishing_area:Fishing_area,
                Fishing_License_Number:Fishing_License_Number
            }
            }).then((result) => {
                console.log(result)
                if(result.data.state==='200'){        
                    alert("註冊成功!");
                    window.location.href = "./login";
                }
                else if(result.data.state === '500'){
                    alert(result.data.error)
                  }
            });
        
        }
    }
    return (
        <div className='register'>
            <h1>註冊帳號</h1>
            <table striped bordered hover>
                <colgroup>
                    <col width="30%"/>
                    <col width="70%"/>
                </colgroup>
                <tbody>
                <tr>
                    <th>
                        <label>電子郵件</label>
                    </th>
                    <td>
                        <input type='email' name="email" placeholder='請輸入E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}  ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>帳號</label>
                    </th>
                    <td>
                        <input type='text' name="ID" placeholder='請輸入帳號' value={ID} onChange={(e) => {setID(e.target.value)}}></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        <label>密碼</label>
                    </th>
                    <td>
                        <input id="password" name="password" type='password'  placeholder='請輸入密碼'value={password} onChange={(e) => {setPassword(e.target.value)}} ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>電話</label>
                    </th>
                    <td>
                        <input id="Phone_number" name="Phone_number"  placeholder='請輸入電話號碼'  onChange={(e) => {setPhone(e.target.value)}} ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>漁船名稱</label>
                    </th>
                    <td>
                        <input type='text' ID = "Fishing_boat_name" name="Fishing_boat_name"placeholder='請輸入漁船名稱' onChange={(e) => {setBoat(e.target.value)}} ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>漁船作業區域</label>
                    </th>
                    <td>
                        <input type='text' ID = "Fishing_area"  name="Fishing_area" placeholder='請輸入漁船作業區域' onChange={(e) => {setArea(e.target.value)}}></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>許可證號碼</label>
                    </th>
                    <td>
                        <input type='text' name="Fishing_License_Number" placeholder='請輸入許可證號碼' onChange={(e) => {setLicense(e.target.value)}}></input>
                    </td>
                </tr>
                </tbody>
            </table>
            <button onClick={send} className='button-ex1'>確定送出</button>
        </div>
    )
}


export default Register