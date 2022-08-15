import {BrowserRouter, HashRouter, Route, Routes,Router} from "react-router-dom";
import './homeContent.css'
import Login from '../member/login'
import Register from '../member/register'
import AccountInfo from '../member/accountInfo'
import EditAccountInfo from '../member/editAccountInfo'
import History from '../member/history'
import Header from "../../components/header"
import HomeContent from "./homeContent"


const home = () =>{
    return (
    <>
        <div>
            <Header/>
        </div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeContent/>}/>
                <Route path="/member/login" element={<Login/>}/>
                <Route path="/member/register" element={<Register/>}/>
                <Route path="/member/accountInfo" element={<AccountInfo/>}/>
                <Route path="/member/editAccountInfo" element={<EditAccountInfo/>}/>
                <Route path="/member/history" element={<History/>}/>
            </Routes>
        </BrowserRouter>
    </>

    )
}

export default home