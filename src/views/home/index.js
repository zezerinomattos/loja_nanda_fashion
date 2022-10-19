import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

// MEUS IMPORTS
import './style.css';
import imgCapaHeader from '../../assets/img-nanda-fashion003.jpg';
import Navbar from '../../components/navbar';
import ProdutoCard from '../../components/produtos-card';

function Home(){
    

    return(
        <>
            <header >
                <Navbar />
                <div className='container-fluid p-0 banner-principal'>
                    <img src={imgCapaHeader} class="img-fluid banner-principal-img " alt="Imagem Capa" />
                </div>
            </header>

            <ProdutoCard />

            <h1>{useSelector(state => state.usuarioLogado)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioEmail)}</h1>
        </>
    );
}

export default Home;