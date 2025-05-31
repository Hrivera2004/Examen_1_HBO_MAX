import React from 'react';
import Hbo_nav from './navbar';
import { C_item } from '../atoms/Carousel_item_mine';


export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6" />

            </div>
            <Hbo_nav />
            <div className="d-flex justify-content-center">
                <div className="carousel-inner">
                    {/*item1*/}
                    <C_item active={true} Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/22621.jpg"} new_or_not={true} age_restriction={"12+"} title={"da"} description="da" tipo_contenido='serie' Num_temporadas={2} />
                    {/*item2*/}
                    {/*item3*/}
                    {/*item4*/}
                    {/*item5*/}
                    {/*item6*/}
                </div>
            </div>

            {/*Controles*/}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}