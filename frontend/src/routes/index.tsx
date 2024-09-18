import { Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Home from "../pages/home/Home"
import AuthRoutes from "./auth/auth_routes"
import { Suspense } from "react"
import PrimaryLayout from "../components/primaryLayout/PrimaryLayout"

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/*" element={<AuthRoutes />} />
            <Route path="/register" element={<Register />} />
            <Route index element={
                <Suspense>
                    <PrimaryLayout>
                        <Home />
                    </PrimaryLayout>
                </Suspense>
            } />
        </Routes>
    )
}
export default MainRoutes