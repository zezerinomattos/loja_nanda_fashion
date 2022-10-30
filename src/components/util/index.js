import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../config/firebase';
import 'firebase/auth';

// MY IMPORTS
import './style.css';
import ImgHeaderFirst from '../../assets/img-nanda-fashion003.jpg';

const BannerOne = (() => {
    const [imagemNova, setImagemNova] = useState();
    const [imagemAtual, setImagenAtual] = useState();
    const usuárioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    useEffect(() => {
        firebase.firestore().collection('nandaFashion').get()
            .then(resultado => {
                setImagenAtual(resultado.data().imagem);
            })
    }, []);

    // function atualizar(){
    //     if(imagemNova){

    //     }
 
    // }

    async function cadastrar(){
        await storage.ref(`imagens/${imagemNova.name}`).put(imagemNova)
            .then(() => {
                db.collection('nandaFashion').add({
                    usuario: usuárioEmail,
                    imagem: imagemNova.name,
                    criacao: new Date()
                });
            })
            .then(() => {
                alert('Cadastrado');
            })
            .catch(erro => {
                alert(erro)
            });    
    }

    return(
        <div id="carouselExampleIndicators" className="carousel slide carrossel-mestre" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner carrossel-img">
                <div className="carousel-item active">
                    <img src={imagemAtual} className="d-block w-100 img-destaque" alt="..." />
                    {
                        useSelector(state => state.usuarioLogado) > 0 ? 
                        <div class="carousel-caption d-none d-md-block ">
                            <input type="file" className="form-control carregar-img" onChange={(e) => setImagemNova(e.target.files [0])}/>
                            <button onClick={cadastrar} type='button' className="btn btn-lg btn-primary my-1" >Salvar Imagem</button>
                        </div>
                        : null
                    }
                    
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/350x150" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/350x150" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
})




const BannerTwo = (() => {
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
})

export {BannerOne, BannerTwo};
