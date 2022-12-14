import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// MEUS IMPORTS
import { store, persistor } from '../store';

import Login from '../views/login';
import NovoUsuario from '../views/novo-usuario';
import Home from '../views/home';
import RecuperarSenha from '../views/recuperar-senha';
import CadastrarProduto from '../views/cadastrar-produto';
import Produtos from '../views/produtos';
import Contato from '../views/contato';
import DetalhesProdutos from '../views/detalhes-produtos';

export default function Rotas(){
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/novousuario' element={<NovoUsuario />} />
                        <Route path='/secuperarsenha' element={<RecuperarSenha />} />
                        <Route path='/cadastrarproduto' element={<CadastrarProduto />} />
                        <Route path='/produtos' element={<Produtos />} />
                        <Route path='/contato' element={<Contato />} />
                        <Route path='/detalhesproduto/:id' element={<DetalhesProdutos />} />
                        <Route path='/editarevento/:id' element={<CadastrarProduto />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}
