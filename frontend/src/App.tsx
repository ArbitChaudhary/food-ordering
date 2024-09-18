import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrimaryLayout from './components/primaryLayout/PrimaryLayout';
import Home from './pages/home/Home';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <PrimaryLayout>
                     <Home />
                  </PrimaryLayout>
               }
            />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
