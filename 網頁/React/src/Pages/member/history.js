import {useState } from 'react'
import axios from 'axios'
import { useNavigate as navigate } from "react-router-dom";


import "./components/style.css"

const Register = () => {   


    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const send = () =>{
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
                            <input type='email' name="email" placeholder='請輸入E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}} ></input>
                        </td>
                </tr>
                <tr>
                        <th>
                            <label>會員名稱</label>
                        </th>
                        <td>
                            <input type='text' name="Name" placeholder='請輸入帳號' value={name} onChange={(e) => {setName(e.target.value)}}></input>
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
                        <label>公司名稱</label>
                    </th>
                    <td>
                        <input type='text' name="Industry_ID" placeholder='請輸入公司名稱'></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>漁船名稱</label>
                    </th>
                    <td>
                        <input type='text' name="boat_name"placeholder='請輸入漁船名稱' ></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>作業區域</label>
                    </th>
                    <td>
                        <input type='text' name="area" placeholder='請輸入漁船作業區域'></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>許可證號碼</label>
                    </th>
                    <td>
                        <input type='number' name="Phone" placeholder='請輸入許可證號碼'></input>
                    </td>
                </tr>
                </tbody>
            </table>
            <button onClick={send} className='button-ex1'>確定送出</button>
        </div>
    )
}

export default Register