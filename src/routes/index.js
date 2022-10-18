import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

// MEUS IMPORTS
import store from '../store';

import Login from '../views/login';
import NovoUsuario from '../views/novo-usuario';
import Home from '../views/home';

export default function Rotas(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/novousuario' element={<NovoUsuario />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
