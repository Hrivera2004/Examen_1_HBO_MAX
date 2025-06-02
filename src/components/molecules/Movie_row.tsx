import React from "react";
import { B_item } from "../atoms/miniatura_mia";

interface MovieItem {
    Link_image: string;
    tag: string;
}
interface Param {
    id_car:string;
    Title: string;
    itemsGroup1: MovieItem[];
    itemsGroup2: MovieItem[];
}
export const Movie_row = ({ id_car,Title, itemsGroup1, itemsGroup2 }: Param) => {
    return <div>
        <h5 style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', paddingLeft: '5%', paddingTop: '1.5%', paddingBottom: '1%', display: 'flex', alignItems: 'center' }}>{Title}</h5>
        <div id={id_car} className="carousel slide">
            <div className="carousel-inner " >
                <div className="carousel-item active">
                    <div className="centered row">
                        {itemsGroup1.map((item, idx) => (
                            <B_item
                                key={idx}
                                Link_image={item.Link_image}
                                tag={item.tag}
                            />
                        ))}

                    </div>
                </div>

                <div className="carousel-item">
                    <div className="centered row">
                        {itemsGroup2.map((item, idx) => (
                            <B_item
                                key={idx}
                                Link_image={item.Link_image}
                                tag={item.tag}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id_car}`} data-bs-slide="prev" style={{ left: '-5%' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id_car}`} data-bs-slide="next" style={{ right: '-5%' }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}