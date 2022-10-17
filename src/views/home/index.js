import React from 'react';

// MEUS IMPORTS
import './style.css';
import Navbar from '../../components/navbar';

function Home(){
    return(
        <>
            <header className="">
                <Navbar />
                <div className='container-fluid banner-principal'></div>
            </header>
        </>
    );
}

export default Home;