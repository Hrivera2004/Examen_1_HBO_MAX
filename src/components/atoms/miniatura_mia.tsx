import React from "react";
interface Param {
    Link_image: string;
    tag: string;
}
export const B_item = ({ Link_image, tag }: Param) => {
    return (
        <div className="carousel_card_wrapper position-relative" id="miniatura">
            <a href="">
                <img className="Adjust_miniatura" src={Link_image} id="Glow"></img>
            </a>
            {tag != "" &&
                <div id="label_miniatura" className="position-absolute d-flex align-items-center justify-content-center" >
                    <span>{tag}</span>
                </div>
            }
            <a href="">
                <div className="top10-dots position-absolute rotated_text" style={{ right: "-6%" }}>
                    &bull;&bull;&bull;
                </div>
            </a>
        </div>
    )
};