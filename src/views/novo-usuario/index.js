import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from '../../config/firebase';
import 'firebase/auth';


// MY IMPORTS
import './style.css';
import logo from '../../assets/logo-Nanda.png';
import Navbar from '../../components/navbar';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] =useState();

    async function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(resposta => {
                setCarregando(0);
                setMsgTipo('sucesso');
                setEmail('');
                setSenha('');
            })
            .catch(erro => {
                setCarregando(0);
                setMsgTipo('erro');
               // console.log(erro);
                switch (erro.message) {
                    case 'Firebase: Error (auth/admin-restricted-operation).':
                        setMsg('Para cadastrar um novo usuário é necessário inserir email e senha!');
                        break;
                    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                        setMsg('A senha de ter pelo menos 6 caracteres!');
                        break;
                    case 'Firebase: Error (auth/email-already-in-use).':
                        setMsg('Este email já está sendo utilizado por outro usuário!');
                        break;
                    case 'Firebase: Error (auth/invalid-email).':
                        setMsg('O formato do seu email é invalido!');
                        break;
                    default:
                        setMsg('Não foi possivel cadastrar. Verifique os dados cadastrados!');
                        break;
                }
            });
    }

    return(
        <>
            <Navbar />
            <div className="text-center ">
                <main className="login-content form-signin d-flex">
                    <form className='mx-auto'>
                        <img className="my-5" src={logo} alt="Logo Nanda Fashion" width="110" height="85" />
                        <h1 className="h3 mb-3 fw-normal">Cadastrar novo usuário</h1>

                        <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="form-control" id="floatingInput" placeholder="E-mail" />
                    
                        <input onChange={(e) => setSenha(e.target.value)} type="password" value={senha} className="form-control my-2" id="floatingPassword" placeholder="Senha" />
                        
                        {
                            carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>
                            :
                            <button onClick={cadastrar} className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">Cadastrar</button> 
                        }
                        
                        <div className='msg-login my-3 text-center'>
                            {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você Cadastrou com Sucesso!</span>}
                            {msgTipo === 'erro' && <span><strong>Ops! </strong>{msg}</span>}
                        </div>
    
                    </form>
                </main>
            </div>
        </>
    );
}

export default NovoUsuario;