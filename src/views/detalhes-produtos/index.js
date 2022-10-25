import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


// MY IMPORTS
import firebase from '../../config/firebase';
import './style.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function DetalhesProdutos(props){

    const [produto, setProduto] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const {id} = useParams();

    useEffect(() => {
        firebase.firestore().collection('nandaFashion').doc(id).get()
            .then(resultado => {
                setProduto(resultado.data())

                firebase.storage().ref(`imagens/${produto.imagem}`).getDownloadURL()
                    .then(url => setUrlImg(url));
            });
    })

    return(
        <>
            <Navbar />
            <div className='container-fluid secao-detalhes-produtos my-4'>
                <div className='row detalhes-mestre col-12'>
                    <h1 className='h2 my-4 text-center titulo'>DETALHES DO PRODUTO</h1>
                    <div className='detalhes-mestre-img col-md-6 col-sm-12'>
                        <div className='container'>
                            <img src={urlImg} className='img-fluid my-2' alt={produto.imagem.name} />
                        </div>
                    </div>
                    <div className='detalhes-mestre-descricao col-md-6 col-sm-12'>
                        <h1 className='h2 mt-2'>{produto.nomeProduto}</h1>
                        <span className='my-4 h4'>{produto.promocao}</span>
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
                    <p>{produto.descricao}</p>                    
                </div>

                <Link to="" className='btn-editar' ><i class="fas fa-pen-square fa-3x"></i></Link>

            </div>
            <Footer />
        </>
    );
}

export default DetalhesProdutos;