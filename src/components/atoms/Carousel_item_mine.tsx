import React from "react";
interface Param {
    active: boolean;
    Link_image: string;
    link_logo: string;
    new_or_not: boolean;
    age_restriction: string;
    description: string;
    tipo_contenido: string;
    Num_temporadas?: number;
    anio?: number
}
export const C_item = ({ active, Link_image, link_logo, new_or_not, age_restriction, description, tipo_contenido, Num_temporadas, anio }: Param) => {
    return (active ? <div className="carousel-item active" >
        <img src={Link_image} className="d-block w-100" alt="First slide" style={{ maxHeight: "100vh" }} />
        <div className="carousel-caption d-none d-md-block position-absolute text-start p-3" style={{ left: "5%", bottom: "10%", width: "30%" }}>
            <img className="img_responsive" src={link_logo} />
            <div className="Subtitle_carousel_style">
                {(new_or_not ? < span className="bordered_text_carousel_style">Nuevo Episodio</span> : <></>)}
                <span> {age_restriction} {(tipo_contenido == 'serie' ? <> {Num_temporadas} Temporadas </> : <>{anio}</>)}</span>
            </div>
            <p className="p_carousel">{description}</p>
            <button className="boton_carousel_style">Ir a la {tipo_contenido}</button>
        </div>
    </div> 
    :<div className="carousel-item">
            <img src={Link_image} className="d-block w-100" alt="First slide" style={{ maxHeight: "100vh" }} />
            <div className="carousel-caption d-none d-md-block position-absolute text-start p-3" style={{  left: "5%", bottom: "10%", width: "30%" }}>
                <img className="img_responsive" src={link_logo} />
                <div className="Subtitle_carousel_style">
                    {(new_or_not ? < span className="bordered_text_carousel_style">Nuevo Episodio</span> : <></>)}
                    <span> {age_restriction} {(tipo_contenido == 'serie' ? <> {Num_temporadas} Temporadas </> : <>{anio}</>)}</span>
                </div>
                <p className="p_carousel">{description}</p>
                <button className="boton_carousel_style">Ir a la {tipo_contenido}</button>

            </div>
        </div>)

}