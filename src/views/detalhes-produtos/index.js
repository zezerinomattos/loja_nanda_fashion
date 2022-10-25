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
            <div className='container-fluid secao-detalhes-produtos my-4'>
                <div className='row detalhes-mestre col-12'>
                    <h1 className='h2 my-4 text-center titulo'>DETALHES DO PRODUTO</h1>
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

                        <div className='my-5 botao-comprar'>
                            <a href="#">COMPRAR</a>
                        </div>
                        
                        <h3 className='h5'>COMPARTILHAR:</h3>
                        <div className='redes-sociais'>
                            <a className='mx-1' href=""><i class="fa-brands fa-instagram"></i></a>
                            <a className='mx-1' href=""><i class="fa-brands fa-facebook"></i></a>
                            <a className='mx-1' href=""><i class="fa-brands fa-whatsapp"></i></a>
                        </div>

                    </div>
                </div>

                <div className='mx-auto descricao-mestre'>
                    <h3 className='my-3'>DESCRIÇÃO</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <Link to="" className='btn-editar' ><i class="fas fa-pen-square fa-3x"></i></Link>

            </div>
            <Footer />
        </>
    );
}

export default DetalhesProdutos;