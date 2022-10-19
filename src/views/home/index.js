import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// MEUS IMPORTS
import './style.css';
import firebase from '../../config/firebase';
import imgCapaHeader from '../../assets/img-nanda-fashion003.jpg';
import Navbar from '../../components/navbar';
import ProdutoCard from '../../components/produtos-card';

function Home(){
    
    const [produto, setProduto] = useState([]);
    let listaProdutos = [];

    useEffect(() => {
        firebase.firestore().collection('nandaFashion').get()
        .then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaProdutos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setProduto(listaProdutos);
        })
        .catch(erro => {
            alert(erro);
        });
    });

    return(
        <div>
            <header >
                <Navbar />
                <div className='container-fluid p-0 banner-principal'>
                    <img src={imgCapaHeader} class="img-fluid banner-principal-img " alt="Imagem Capa" />
                </div>
            </header>

            <section className='row produto-ofertas'>
                <h2>OFERTAS</h2>
                <div className='row produto-ofertas-mestre'>
                    {produto.map(item => item.secaoDestacar === "Ofertas" ? <ProdutoCard id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                                promocao={item.promocao} valor={item.valor} img={item.imagem} visualizacoes={item.visualizacoes} /> : null )}
                </div>
            </section>

        </div>
    );
}

export default Home;