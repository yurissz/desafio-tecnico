import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home"
import SignUp from "./pages/registerUser/registerUser"
import SignIn from './pages/login/login'
import RegisterProduct from "./pages/registerProduct/registerProduct";


export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/product' element={<RegisterProduct />} />
            </Routes>
        </>
    )
}