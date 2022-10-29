import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// MY IMPORTS
import './style.css';
import ImgHeaderFirst from '../../assets/img-nanda-fashion003.jpg';

const BannerOne = (() => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide carrossel-mestre" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner carrossel-img">
                <div className="carousel-item active">
                    <img src={ImgHeaderFirst} className="d-block w-100 img-destaque" alt="..." />
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
