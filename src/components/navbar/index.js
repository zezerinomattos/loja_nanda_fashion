import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// MEUS IMPORTS
import './style.css';
import logo from '../../assets/logo-Nanda.png';

function Navbar(){

    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Logo loja" className='img-navebar-logo' /></Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 navbar-ul">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> 
                        {    
                            useSelector(state => state.usuarioLogado) > 0 ? 
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/produtos">Produtos</Link></li>                      
                                    <li className="nav-item"><Link className="nav-link" to='/contato'>Contato</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/cadastrarproduto'>Cadastrar Produtos</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/novousuario'>Cadastrar Usuário</Link></li>                        
                                    <li className="nav-item " onClick={() => dispatch({type: 'LOG_OUT'})}><Link className="nav-link" to='#'>Sair</Link></li>
                                </>
                            :
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/produtos">Produtos</Link></li>                      
                                    <li className="nav-item"><Link className="nav-link" to='/contato'>Contato</Link></li>
                                </>
                            
                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;