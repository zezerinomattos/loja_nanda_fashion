import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { db, auth } from '../../config/firebase';
import 'firebase/auth';

// MY IMPORTS
import './style.css';
import logo from '../../assets/logo-Nanda.png';
import { sendPasswordResetEmail } from 'firebase/auth';

function RecuperarSenha(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    async function recuperarSenha(){
        await sendPasswordResetEmail(email)
         .then(resposta => {
            setMsg('Enviamos um link no seu email para você redefinir a senha!');
         })
         .catch(erro => {
            setMsg('Verifique se o e-mail está correto!');
         });
    }

    return(
        <main className="login-content form-signin d-flex">
            <form className='mx-auto'>
                <img className="my-3" src={logo} alt="Logo Nanda Fashion" width="110" height="85" />
                <h1 className="h3 mb-3 fw-normal">Recuperar senha</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                
                <div className='mgs my-4'>
                    <span>{msg}</span>
                </div>

                <button onClick={recuperarSenha} className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">Recuperar Senha</button>
            </form>
        </main>
    );
}

export default RecuperarSenha;