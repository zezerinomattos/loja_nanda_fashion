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
    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const [carregando, setCarregando] = useState(1);
    const [excluido, setExcluido] = useState(0);
    const [msgTipo, setMsgTipo] = useState('')
    

    useEffect(() => {
        setMsgTipo('');
        if(carregando){
            firebase.firestore().collection('nandaFashion').doc(id).get()
                .then(resultado => {
                    setProduto(resultado.data())

                    //Incremento de visualizações 
                    firebase.firestore().collection('nandaFashion').doc(id).update('visualizacoes', resultado.data().visualizacoes + 1)

                    firebase.storage().ref(`imagens/${resultado.data().imagem}`).getDownloadURL()
                        .then(url => {
                            setUrlImg(url);
                            setCarregando(0);
                        });
                });
        }else{
            firebase.storage().ref(`imagens/${produto.imagem}`).getDownloadURL()
                .then(url => setUrlImg(url));
        }
    }, []);

    function remover(){
        firebase.firestore().collection('nandaFashion').doc(id).delete()
            .then(() => {
                setExcluido(1);
            })
    }


    return(
        <>
            <Navbar />
            {
                excluido ? <Navigate to='/' /> : null
            }
            <div className='container-fluid secao-detalhes-produtos my-4'>
                {
                    carregando ? <div className='row mt-5'><div className="spinner-border text-danger mx-auto" role="status"><span className="visually-hidden"></span></div></div>
                    :
                    <div>
                  
                        <div className='row detalhes-mestre col-12'>
                            <h1 className='h2 my-4 text-center titulo'>DETALHES DO PRODUTO</h1>
                            <div className='detalhes-mestre-img col-md-6 col-sm-12'>
                                <div className='container img-container'>
                                    <img src={urlImg} className='img-fluid my-2' alt='imagens de produtos' />
                                </div>
                            </div>
                            <div className='detalhes-mestre-descricao col-md-6 col-sm-12'>
                                <h1 className='h2 mt-2'>{produto.nomeProduto}</h1>
                                <span className='my-4 h4'>{produto.promocao}</span>

                                <div className='col-12 mt-2 text-right visualizacoes'>
                                    <i class="fas fa-eye"></i> <span>{produto.visualizacoes + 1}</span>
                                </div>

                                <p>Aqui na Nanda Fashion o atendimento é personalizado e você não finaliza sua compra com um robô ao clicar no 
                                    botão <strong>COMPRAR</strong> logo abaixo você sera direcionado para o atendimento com um de nossos vendadores e 
                                    com isso evitamos um atendimento frio e sem emoção, com nosso atendimento personalizado nossos clientes podem tirar suas
                                    duvidas, como por exemplo, o tamanho de confecção, cores mais realistas e muitas outras informações. 
                                </p>

                                <div className='my-5 botao-comprar'>
                                    <a href="https://wa.me/5548991589625?text=Olá %20Nanda,%20tudo%20bem?" target="_blank">COMPRAR</a>
                                </div>
                                
                                <h3 className='h5'>COMPARTILHAR:</h3>
                                <div className='redes-sociais d-flex'>
                                    <a className='mx-1' href="https://www.instagram.com/nanda_fashion_roupas/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a className='mx-1' href="https://www.facebook.com/paris.zenanda" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                    <a className='mx-1' href="https://wa.me/5548991589625?text=Olá %20Nanda,%20tudo%20bem?" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                                </div>

                                

                            </div>
                        </div>

                        <div className='mx-auto descricao-mestre'>
                            <h3 className='my-3'>DESCRIÇÃO</h3>
                            <p>{produto.descricao}</p>                    
                        </div>

                        {
                            usuarioLogado ? <Link to={`/editarevento/${id}`} className='btn-editar' ><i class="fas fa-pen-square fa-3x"></i></Link>
                            : ''
                        }

                        {
                            usuarioLogado ? <button onClick={remover} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-remover' >Remover Produto</button>
                            : ''
                        }
                    </div>
                }

            </div>
            <Footer />
        </>
    );
}

export default DetalhesProdutos;