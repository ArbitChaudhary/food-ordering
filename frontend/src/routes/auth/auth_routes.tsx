import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const SignInLazy = lazy(() => import('../../pages/login/Login'))
const RegisterLazy = lazy(() => import('../../pages/register/Register'))

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path="sign-in" element={
                    <Suspense>
                        <SignInLazy />
                    </Suspense>
                }/>
                <Route
                    path="/register"
                    element={
                        <Suspense>
                            <RegisterLazy />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default AuthRoutes;