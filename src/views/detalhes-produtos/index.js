import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// MY IMPORTS
import firebase from '../../config/firebase';
import './style.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function DetalhesProdutos(){
    return(
        <>
            <Navbar />
            <div className='container-fluid my-4'>
                <div className='row detalhes-mestre col-12'>
                    <h1 className='h2 my-3 text-center titulo'>DETALHES DO PRODUTO</h1>
                    <div className='detalhes-mestre-img col-md-6 col-sm-12'>
                        <div className='container'>
                            <img src="https://via.placeholder.com/150x100" className='img-fluid my-2' alt="" />
                        </div>
                    </div>
                    <div className='detalhes-mestre-descricao col-md-6 col-sm-12'>
                        <h1 className='h2 mt-2'>PRÉ VENDA - MACAQUINHO GLOW</h1>
                        <span className='my-4 h4'>R$70.00</span>
                        <p>Aqui na Nanda Fashion o atendimento é personalizado e você não finaliza sua compra com um robô ao clicar no 
                            botão <strong>COMPRAR</strong> logo abaixo você sera direcionado para o atendimento com um de nossos vendadores e 
                            com isso evitamos um atendimento frio e sem emoção, com nosso atendimento personalizado nossos clientes podem tirar suas
                            duvidas, como por exemplo, o tamanho de confecção, cores mais realistas e muitas outras informações. 
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetalhesProdutos;