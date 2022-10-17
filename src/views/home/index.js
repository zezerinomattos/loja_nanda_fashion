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
                <h1>teste</h1>
            </header>
        </>
    );
}

export default Home;