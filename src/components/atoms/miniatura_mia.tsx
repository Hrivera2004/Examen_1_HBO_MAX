import React from "react";
interface Param {
    Link_image: string;
    tag: string;
}
export const B_item = ({ Link_image, tag }: Param) => {
    return (
        <div className="carousel_card_wrapper position-relative" id="miniatura">
            <a href="">
                <img className="Adjust_miniatura" src={Link_image}></img> 
            </a>
            {tag != "" &&
                <div id="label_miniatura" className="position-absolute d-flex align-items-center justify-content-center" >
                    <span>{tag}</span>
                </div>
            }
        </div>
    )
};