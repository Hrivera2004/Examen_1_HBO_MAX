import React from "react";
interface Param {
    active: boolean;
    Link_image: string;
    new_or_not: boolean;
    age_restriction: string;
    title: string;
    description: string;
    tipo_contenido: string;
    Num_temporadas?: number;
    anio?:number
}
export const C_item = ({ active, Link_image, new_or_not, age_restriction, title, description, tipo_contenido, Num_temporadas, anio}: Param) => {
    return (active ? <div className="carousel-item active" >
        <img src={Link_image} className="d-block w-100" alt="First slide" style={{ maxHeight: "90vh" }} />
        <div className="carousel-caption d-none d-md-block position-absolute text-start p-3" style={{ left: "10%", bottom: "20%" }}>
            <h2 className="mb-1">{title}</h2>
            <div className="Subtitle_carousel_style">
                {(new_or_not ? < span className="bordered_text_carousel_style">Nuevo Episodio</span> : <></>)}
                <span> {age_restriction} {(tipo_contenido == 'serie'? <> {Num_temporadas} Temporadas </>:<>{anio}</>)}</span>
                
            </div>
            <></>
            <p className="mb-0">{description}</p>
            <button className="boton_carousel_style">Ir a la {tipo_contenido}</button>

        </div>
    </div> :
        <div className="carousel-item">
            <img src={Link_image} className="d-block w-100" alt="First slide" style={{ maxHeight: "90vh" }} />
            <div className="carousel-caption d-none d-md-block position-absolute text-start p-3" style={{ left: "15%", bottom: "40%" }}>
                <h5 className="mb-1">{title}</h5>
                <p className="mb-0">{description}</p>
            </div>
        </div>)
}