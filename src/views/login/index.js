import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';


// MY IMPORTS
import './style.css';
import logo from '../../assets/logo-Nanda.png';

function Login(){
    return(
        <div className="text-center ">
            <main className="login-content form-signin d-flex">
                <form className='mx-auto'>
                    <img className="my-5" src={logo} alt="Logo Nanda Fashion" width="110" height="85" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                
                    <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />
                    
                    <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">Entrar</button>

                    <div className='msg-login my-3 text-center'>
                        <span><strong>Wow! </strong>Você está conectado!</span>
                        <span><strong>Ops! </strong>Verifique se a senha ou o usuário estão corretos!</span>
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