import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


//MY IMPORTS
import './style.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function Contato(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDHwHEWkp6vfhPRshAd_w77YO6nj1GJor4"
    })

    const position = {
        lat: -28.948874, 
        lng: -49.534056
    }

    return(
        <>
            <Navbar />
            <main className='contato'>
                <h1 className='h1 text-center my-5'>CONTATO</h1>
                <div className='contato-mestre container'>
                    <div className='mapa-mestre my-5'>
                        <div className='iformacoe-redes-sociais p-2'>
                            <h3 className='h3'>CONTATO</h3>
                            <p>
                                - Entregamos no mesmo dia em Araranguá e região, outras regiões vai depender do praso de entrega dos correios ou transportadora. <br/>
                                - Em araranguá o valor do freté custa R$10,00 Fora de Araranguá frete a consultar. <br/>
                                - Retiradas podem ser feitas em horario comercial.
                            </p>

                            <div className='redes-sociais'>
                                <a href="https://wa.me/5548991589625?text=Olá %20Nanda,%20tudo%20bem?" target="_blank">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                                <a href="https://www.instagram.com/nanda_fashion_roupas/" target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="https://www.facebook.com/paris.zenanda" target="_blank">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className='map'>
                            {
                                isLoaded ? (
                                    <GoogleMap
                                      mapContainerStyle={{width: '100%', height: '100%'}}
                                      center={position}
                                      zoom={16}
                                    >
                                    <Marker 
                                        position={position} 
                                        options={{
                                            label: {
                                                text: "Nanda Fashion",
                                                className: "map-marker"
                                            }
                                        }}
                                    />
                                    </GoogleMap>
                                ) : <></>
                            }               
                        </div>
                    </div>
                    <div className='form-mestre mb-5'></div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contato;