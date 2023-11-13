import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from "../../assets/contexts/AuthContext"

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    function cadastrartema() {
        navigate('/temas')
    }


    return (
        <>
            <div className="w-full bg-indigo-900 text-white flex justify-center py-4" >
                <div className="container flex justify-between text-lg" >
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className="flex gap-4 " >
                        <Link to='/home' className="hover:underline">Home</Link>
                        <button>Postagens</button>
                        <Link to='/temas' className="hover:underline">Temas</Link>
                        <Link to='/cadastroTema' className="hover:underline">Cadastrar Tema</Link>
                        <button>Perfil</button>
                        <Link to='' onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar