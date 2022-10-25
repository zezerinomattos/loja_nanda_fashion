import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// MY IMPORTS
import './style.css';
import firebase from '../../config/firebase';
import Navbar from '../../components/navbar';
import ProdutoCard from '../../components/produtos-card';
import Footer from '../../components/footer';

function Produtos(){

    const [produtos, setProduto] = useState([]);
    let listaProdutos = [];

    const [pesquisa, setPesquisa] = useState('');

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
        });
    });

    return(
        <>
            <Navbar />
            <main className='my-5'>

                <form class="d-flex my-5 mx-auto col-11">
                    <input onChange={(e) => setPesquisa(e.target.value.toUpperCase())} class="form-control me-2 pesquisar" type="search" placeholder="Pesquisar" />
                </form>


                <section className='produtos-mestre row'>
                    {produtos.map(item => <ProdutoCard key={item.id} id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                            promocao={item.promocao} valor={item.valor} img={item.imagem} visualizacoes={item.visualizacoes} />)}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Produtos;