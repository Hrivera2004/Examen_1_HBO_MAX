import React from "react";
interface Param {
    Link_image: string;
    new_or_not: Number; //0 = nada, 1 = nuevo, 2 = nuevo episodio
}
export const B_item = ({ Link_image,new_or_not}: Param) => {
    return  <div>
        <img src={Link_image} className="d-block w-100" alt="First slide" style={{ maxHeight: "100vh" }} />
        <div className="position-absolute text-start p-3" style={{ left: "5%", bottom: "10%", width: "30%" }}>
            

        </div>
        </div>

}