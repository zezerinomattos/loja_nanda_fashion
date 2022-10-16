import React from 'react';

// MEUS IMPORTS
import './style.css';
import Navbar from '../../components/navbar';

function Home(){
    return(
        <>
            <header>
                <Navbar />
                <div className='banner-principal'></div>
            </header>
        </>
    );
}

export default Home;