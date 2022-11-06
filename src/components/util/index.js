import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import 'firebase/auth';

// MY IMPORTS
import './style.css';
import imagem from '../../assets/placeholder.jpg';

const BannerOne = (() => {

    const [imagemNovaUm, setImagemNovaUm] = useState();
    const [imagemNovaDois, setImagemNovaDois] = useState();
    const [imagemNovaTres, setImagemNovaTres] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();

    let listaProdutos = [];
    const [urlImagemUm, setUrlImagemUm] = useState();
    const [urlImagemDois, setUrlImagemDois] = useState();
    const [urlImagemTres, setUrlImagemTres] = useState();

    useEffect(() => {
        firebase.firestore().collection('bannersNanda').get()
            .then(async (resultado) => {
              await resultado.docs.forEach(doc => {
                listaProdutos.push({
                    id: doc.id,
                    imagemUm: doc.data().imagemUm,
                    imagemNovaDois: doc.data().imagemNovaDois,
                    imagemNovaTres: doc.data().imagemNovaTres,
                    ...doc.data()
                })
                
                listaProdutos.map((item) => {
                  const {id, imagemUm, imagemNovaDois, imagemNovaTres} = item
    
                  firebase.storage().ref(`fotos/${imagemUm}`).getDownloadURL()
                  .then(url => {setUrlImagemUm(url)})  
    
                  firebase.storage().ref(`fotos/${imagemNovaDois}`).getDownloadURL()
                  .then(url => {setUrlImagemDois(url)})
    
                  firebase.storage().ref(`fotos/${imagemNovaTres}`).getDownloadURL()
                  .then(url => {setUrlImagemTres(url)})
    
                })
    
              })
                   
            })
    
            .catch(erro => {
                alert(erro);
            });
            
    }, []);


    // -------- CADASTROS -----------------------
    async function cadastrarUm(){
        
        await storage.ref(`fotos/${imagemNovaUm.name}`).put(imagemNovaUm)
            .then(() => {
                db.collection('testeBanner').add({
                    imagemUm: imagemNovaUm.name,
                    criacao: new Date()
                });
            })
            .then(() => {
                alert('Imagem salva!')
            })
            .catch(erro => {
                alert(erro);
            });    
    }

    async function cadastrarDois(){
        await storage.ref(`fotos/${imagemNovaDois.name}`).put(imagemNovaDois)
        .then(() => {
            db.collection('testeBanner').add({
                imagemNovaDois: imagemNovaDois.name,
                criacao: new Date()
            });
        })
        .then(() => {
            alert('Imagem Salva!')
        })
        .catch(erro => {
            alert(erro);
        })
    }

    async function cadastrarTres(){
        await storage.ref(`fotos/${imagemNovaTres.name}`).put(imagemNovaTres)
        .then(() => {
            db.collection('testeBanner').add({
            imagemNovaTres: imagemNovaTres.name,
            criacao: new Date()
            });
        })
        .then(() => {
            alert('Imagem Salva!')
        })
        .catch(erro => {
            alert(erro);
        });
    }

// ------------------------------------------
    
    return(
        <div id="carouselExampleIndicators" className="carousel slide carrossel-mestre" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner carrossel-img">
                <div className="carousel-item active">
                    {imagemNovaUm ? <img src={URL.createObjectURL(imagemNovaUm)} className="d-block w-100 img-destaque" alt="..." />
                        : <img src={urlImagemUm ? urlImagemUm : imagem} className="d-block w-100 img-destaque" alt="..." />
                    }
                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                            <div class="carousel-caption d-none d-md-block carregamento-img">
                                <input onChange={(e) => setImagemNovaUm(e.target.files[0]) } type="file" className="form-control"/>
                                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={cadastrarUm}>Publicar Imagem</button>
                            </div>
                        : null
                    }
                </div>
                <div className="carousel-item">
                    {imagemNovaDois ? <img src={URL.createObjectURL(imagemNovaDois)} className="d-block w-100 img-destaque" alt="..." />
                        : <img src={urlImagemDois ? urlImagemDois :imagem} className="d-block w-100 img-destaque" alt="..." />
                    }
                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                            <div class="carousel-caption d-none d-md-block carregamento-img">
                                <input onChange={(e) => setImagemNovaDois(e.target.files[0]) } type="file" className="form-control"/>
                                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={cadastrarDois}>Publicar Imagem</button>
                            </div>
                        : null
                    }
                </div>
                <div className="carousel-item">
                    {imagemNovaTres ? <img src={URL.createObjectURL(imagemNovaTres)} className="d-block w-100 img-destaque" alt="..." />
                        : <img src={urlImagemTres ? urlImagemTres : imagem} className="d-block w-100 img-destaque" alt="..." />
                    }
                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                            <div class="carousel-caption d-none d-md-block carregamento-img">
                                <input onChange={(e) => setImagemNovaTres(e.target.files[0]) } type="file" className="form-control "/>
                                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={cadastrarTres}>Publicar Imagem</button>
                            </div>
                        : null
                    }
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

//----------------------------------------------------------------------

const BannerTwo = (() => {
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade carrossel-mestre" data-bs-ride="carousel">
            <div className="carousel-inner carrossel-img">
                <div className="carousel-item active ">
                    <img src={imagem} className="d-block w-100 img-destaque" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagem} className="d-block w-100 img-destaque" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagem} className="d-block w-100 img-destaque" alt="..." />
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
