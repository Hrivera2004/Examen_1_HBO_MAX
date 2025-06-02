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
            </div>
            <div className="d-flex justify-content-center">
                <div className="carousel-inner">
                    {/*item1*/}
                    <C_item active={true} 
                    link_logo=
                    {"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dhevcxj-9751b4db-d85a-47c0-a66b-670b4789d509.png/v1/fill/w_1193,h_670/ironheart_logo_png_hd_2025_by_andrewvm_dhevcxj-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kaGV2Y3hqLTk3NTFiNGRiLWQ4NWEtNDdjMC1hNjZiLTY3MGI0Nzg5ZDUwOS5wbmciLCJ3aWR0aCI6Ijw9MTIzMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZSs4vifDZvX0BFrJDN11GkMhTVDW1NAUa5m6MGtn_28"}
                    Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/22621.jpg"} 
                    new_or_not={false} 
                    age_restriction={"12+"} 
                    description="MIT student Riri Williams returns home to Chicago where she becomes entangled with the enigmatic Parker Robbins, discovering secrets that pit technology against magic." 
                    tipo_contenido='pelicula'
                    Num_temporadas={2} />
                    {/*item2*/}
                    <C_item active={false} 
                    link_logo=
                    {"https://seeklogo.com/images/T/the-last-of-us-logo-799CB86CC0-seeklogo.com.png"}
                    Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/21983.jpg"} 
                    new_or_not={true} 
                    age_restriction={"18+"} 
                    description="Serie posapocalíptica inspirada en el aclamado videojuego que sigue la brutal y desgarradora travesía de un hombre cínico y una joven de 14 años." 
                    tipo_contenido='serie'
                    Num_temporadas={2} />
                    {/*item3*/}
                    <C_item active={false} 
                    link_logo=
                    {"https://images.cdn.prd.api.discomax.com/2024/11/13/46b3f4e8-5be2-3ffe-9bc0-5b08c4741c79.png?w=600&f=webp"}
                    Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/19705.jpg"} 
                    new_or_not={false} 
                    age_restriction={"16+"} 
                    description="Del universo de Duna creado por Frank Herbert, la serie sigue a la legendaria secta que se conocerá como la Orden Bene Gesserit." 
                    tipo_contenido='serie'
                    Num_temporadas={1} />
                    {/*item4*/}
                    <C_item active={false} 
                    link_logo=
                    {"https://images.cdn.prd.api.discomax.com/2024/07/11/25f1da58-1662-3d3b-9067-97bdca02a7f2.png?w=600&f=webp"}
                    Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/8238.jpg"} 
                    new_or_not={false} 
                    age_restriction={"18+"} 
                    description="HBO presenta esta serie que sigue la emocionante historia de la Casa Targaryen, ambientada 200 años antes de los eventos de Juego de Tronos." 
                    tipo_contenido='serie'
                    Num_temporadas={1} />
                    {/*item5*/}
                    <C_item active={false} 
                    link_logo=
                    {"https://images.cdn.prd.api.discomax.com/2023/09/05/02b96cc9-42bf-304c-82e2-821856e52c1d.png?w=600&f=webp"}
                    Link_image={"https://4kwallpapers.com/images/walls/thumbs_3t/20121.jpg"} 
                    new_or_not={true} 
                    age_restriction={"16+"} 
                    description="DOOM PATROL recrea uno de los grupos de superhéroes más queridos de DC, llamados a la acción por Cyborg, con una misión difícil de rechazar." 
                    tipo_contenido='serie'
                    Num_temporadas={4} />
                </div>
            </div>

            {/*Controles*/}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{ left: '-5%' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{ right: '-5%' }}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        
    );
}