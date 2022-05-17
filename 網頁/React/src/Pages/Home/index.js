import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from '../member/login'
import Register from '../member/register'
import Header from "../../components/header"
import HomeContent from "./homeContent"


const home = () =>{
    return (
    <>
    <BrowserRouter >
        <div>
            <Header/>
        </div>
        <Routes>
            <Route path="/" element={<HomeContent/>}/>
            <Route path="/member/login" element={<Login/>}/>
            <Route path="/member/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>



    )
}

export default home