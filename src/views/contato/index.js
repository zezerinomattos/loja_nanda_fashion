import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


//MY IMPORTS
import './style.css';
import Navbar from '../../components/navbar';

function Contato(){

    return(
        <>
            <Navbar />
            <main className='contato-mestre'>
                <h1 className='h1 text-center my-5'>CONTATO</h1>
                <div className='contato-mestre'>
                    <div className='mapa-mestre'>
                        <div className='mapa'>
                                                    
                        </div>
                    </div>
                    <div className='form-mestre'></div>
                </div>
            </main>
        </>
    );
}

export default Contato;