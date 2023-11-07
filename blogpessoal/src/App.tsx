import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import CadastroTema from './pages/cadastroTema/CadastroTema'

function App() {
  return (
    <>
      <Navbar />
      {/*  <Home /> */}
      {/* <Login /> */}
      <Cadastro />
      {/* <CadastroTema /> */}
      <Footer />
    </>
  );
}

export default App
