import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';
import 'firebase/auth';

//MY IMPORTS
import './style.css';
import Navbar from '../../components/navbar';

function CadastrarProduto(){

    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();

    const [nomeProduto, setNomeProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState();
    const [secaoProduto, setSecaoProduto] = useState();
    const [destacar, setDestacar] = useState();
    const [secaoDestacar, setSecaoDestacar] = useState();
    const [valor, setValor] = useState();
    const [promocao, setPromocao] = useState();
    const [imagem, setImagen] = useState();
    const usuárioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();


    async function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);

        await storage.ref(`imagens/${imagem.name}`).put(imagem)
            .then(() => {
                db.collection('nandaFashion').add({
                    nomeProduto: nomeProduto,
                    descricao: descricao,
                    tipo: tipo,
                    secaoProduto: secaoProduto,
                    destacar: destacar,
                    secaoDestacar: secaoDestacar,
                    valor: valor,
                    promocao: promocao,
                    usuario: usuárioEmail,
                    visualizacoes: 0,
                    imagem: imagem.name,
                    criacao: new Date()
                });
            })
            .then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            })
            .catch(erro => {
                setMsgTipo('erro')
                setCarregando(0);
            });    
    }

    return(
        <>
            <Navbar />
            <div className="col-12 cadastro-titulo">
                <div className='text-center'>
                    <h3 className='mt-5 font-weight-bold'>Novo Produto</h3>
                </div>
            </div>

            <form className="col-md-8 col-sm-10 my-3 mx-auto">
                <div className="form-group my-4 w-100">
                    <label>Nome do Produto</label>
                    <input type="text" className="form-control" onChange={(e) => setNomeProduto(e.target.value.toUpperCase())}/>
                </div>

                <div className="form-group mb-5 w-100">
                    <label>Descrição do Produto</label>
                    <textarea type="text" className="form-control" rows='5' onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div className="form-group d-flex mb-4 w-100">    
                    <div className="form-group col-2">
                        <label>Tipo do Produto</label>
                        <select type="text" className="form-control" onChange={(e) => setTipo(e.target.value)}>
                            <option disabled selected value >---Selecione um Tipo--</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Calçados</option>
                        </select>                  
                    </div>

                    <div className="form-group col-2 mx-2">
                        <label>Seção do Produto</label>
                        <select type="text" className="form-control" onChange={(e) => setSecaoProduto(e.target.value)}>
                            <option disabled selected value >---Selecione um Tipo--</option>
                            <option>Calça</option>
                            <option>Vestidos / Macacão</option>
                            <option>Shorts</option>
                            <option>Body / Cropped</option>
                            <option>T-shirt</option>
                            <option>Conjuntos</option>
                        </select>                  
                    </div>

                    <div className="form-group col-2 mx-5 ">
                        <label>Destacar em Home</label>
                        <select type="text" className="form-control" onChange={(e) => setDestacar(e.target.value)}>
                            <option disabled selected value >---Selecione--</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>                  
                    </div>

                    {
                        destacar === 'Sim' ? <div className="form-group col-2 mx-5 secaoDestacar ">                      
                            <label>Qual seção destacar</label>
                            <select type="text" className="form-control" onChange={(e) => setSecaoDestacar(e.target.value)}>
                                <option disabled selected value >---Selecione--</option>
                                <option>Ofertas</option>
                                <option>Tendência</option>
                                <option>Mais vendidos</option>
                                <option>Pijamas e Lingerie</option>
                                <option>Sex Shop</option>
                            </select>                  
                        </div>

                        :

                        <div className="form-group col-2 mx-5 secaoDestacar d-none "></div>
                    }


                </div>


                <div className="form-group d-flex mb-4 w-100">
                    <div className="col-2">
                        <label>Valor</label>
                        <input type="text" className="form-control" placeholder="00,00" onChange={(e) => setValor(e.target.value)}/>
                    </div>
                    <div className="col-2 mx-5">
                        <label>Promoção</label>
                        <input type="text" className="form-control" placeholder="00,00" onChange={(e) => setPromocao(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group mb-5 w-100">
                    <label>Upload da Imagem</label>
                    <input type="file" className="form-control" onChange={(e) => setImagen(e.target.files [0])}/>
                </div>

                {imagem ? <img src={URL.createObjectURL(imagem)} alt="Imagem" width="150" height="100" /> : ""}
                
                <div className="row mt-4">
                    {
                        carregando > 0 ? <div class="spinner-border text-warning text-center" role="status"><span class="visually-hidden">Loading...</span></div>
                        : <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="button" onClick={cadastrar}>Publicar Produto</button>
                    }
                </div>

            </form>

            <div className='msg-login my-5 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Produto Publicado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>Não foi possivel publicar esse produto!</span>}
            </div>
        </>
    );
}

export default CadastrarProduto;