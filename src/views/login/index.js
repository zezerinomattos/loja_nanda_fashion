import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { db, auth } from '../../config/firebase';
import 'firebase/auth';
//import { signInWithEmailAndPassword } from 'firebase/auth';


// MY IMPORTS
import './style.css';
import logo from '../../assets/logo-Nanda.png';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();

    const dispatch = useDispatch();

    async function logar(){
        setCarregando(1)
        await signInWithEmailAndPassword(auth, email, senha)
            .then(resposta => {
                setCarregando(0);
                setMsgTipo('sucesso');
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            })
            .catch(erro => {
                setCarregando(0)
                setMsgTipo('erro');
            });
    }


    return(
        <div className="text-center ">
            <main className="login-content form-signin d-flex">
                <form className='mx-auto'>
                    <img className="my-5" src={logo} alt="Logo Nanda Fashion" width="110" height="85" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />
                    
                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>
                        :
                        <button onClick={logar} className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">Entrar</button>
                    }

                    <div className='msg-login my-3 text-center'>
                        {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você está conectado!</span>}
                        {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique se a senha ou o usuário estão corretos!</span>}
                    </div>

                    
                    <div className="recuperar-senha mt-4 text-center">
                        <a href="">Esqueceu a Senha?</a>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login;