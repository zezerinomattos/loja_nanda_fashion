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
                <section className='produtos-mestre row'>
                    {produtos.map(item => <ProdutoCard id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                            promocao={item.promocao} valor={item.valor} img={item.imagem} />)}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Produtos;