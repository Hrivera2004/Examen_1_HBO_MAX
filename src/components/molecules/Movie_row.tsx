import React from "react";
import { B_item } from "../atoms/miniatura_mia";
interface Param {
    Title: string; 
}
export const Movie_row = ({Title}: Param) => {
    return  <div><h5>{Title}</h5>
     <B_item Link_image="https://images.cdn.prd.api.discomax.com/2023/10/01/e7af3b34-8c0f-3e53-adbe-d74209a790ce.jpeg?w=300&f=webp" new_or_not ={1} />
    </div>

}