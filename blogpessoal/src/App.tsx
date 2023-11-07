import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './assets/contexts/AuthContext';

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Footer from './components/footer/Footer'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ AuthProvider>
  );
}

export default App
