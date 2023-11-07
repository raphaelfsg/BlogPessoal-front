import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

import './Cadastro.css'

import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")

    function back() {
        navigate('/login')
    }

    const [Usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (usuario.id !== 0)
        retornar()
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold' >
                <div className='fundoCadastro hidden lg:block' ></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
                    <h2 className='text-slate-900 text-5x1'>Cadastrar</h2>
                    <div className='flex flex-col w-full' >
                        <label htmlFor='nome'>Nome</label>
                        <input
                        type='text'
                        id='nome'
                        name='nome'
                        placeholder='Nome'
                        className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex flex-col w-full' >
                        <label htmlFor='usuario'>Usuario</label>
                        <input
                        type='text'
                        id='usuario'
                        name='usuario'
                        placeholder='Usuario'
                        className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='foto'>Foto</label>
                        <input
                        type='text'
                        id='foto'
                        name='foto'
                        placeholder='Foto'
                        className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='senha'>Senha</label>
                        <input
                        type='password'
                        id='senha'
                        name='senha'
                        placeholder='Senha'
                        className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex flex-col w-full' >
                        <label htmlFor='confirmarSenha'>Confirmar Senha</label>
                        <input
                        type='password'
                        id='confirmarSenha'
                        name='confirmarSenha'
                        placeholder='Confirma Senha'
                        className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex justify-around w-full gap-8' >
                        <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back} >
                            Cancelar
                        </button>
                        <button type='submit' className='rounded text-white bg-indigo-400 
                        hover:bg-indigo-900 w-1/2 py-2'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;