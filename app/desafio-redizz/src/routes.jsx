import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/home/home"
import SignUp from "./pages/registerUser/registerUser"
import SignIn from './pages/login/login'
import RegisterProduct from "./pages/registerProduct/registerProduct";
import { MyProfile } from "./pages/myProfile/myProfile";
import { makeRequest } from "./utils/makeRequest";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/home'
                loader={() => makeRequest('/product', 'GET')}
                element={<Home />} />
            <Route path='/product' element={<RegisterProduct />} />
            <Route path='/profile'
                loader={() => makeRequest('/request', 'GET')}
                element={<MyProfile />} />
        </Route>
    )
)




