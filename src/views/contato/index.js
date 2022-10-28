import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


//MY IMPORTS
import './style.css';
import Navbar from '../../components/navbar';

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
            <main className='contato-mestre'>
                <h1 className='h1 text-center my-5'>CONTATO</h1>
                <div className='contato-mestre'>
                    <div className='mapa-mestre'>
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
                    <div className='form-mestre'></div>
                </div>
            </main>
        </>
    );
}

export default Contato;