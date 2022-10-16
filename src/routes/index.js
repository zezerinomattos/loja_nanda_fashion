import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// MEUS IMPORTS
import Login from '../views/login';
import NovoUsuario from '../views/novo-usuario';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/novousuario' element={<NovoUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}
