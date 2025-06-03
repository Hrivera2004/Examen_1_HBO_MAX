import React from "react";
import { Top10_item } from "../atoms/Top10_item";

interface Top10Item {
  Link_image: string;
  number: number;
}

interface Top10RowProps {
  id_car: string;
  Title: string;
  itemsGroup1: Top10Item[];
  itemsGroup2: Top10Item[];
}

export const Top10_row = ({
  id_car,
  Title,
  itemsGroup1,
  itemsGroup2,
}: Top10RowProps) => {
  return (
    <div>
      {/* Título “Top 10 Películas Hoy” */}
      <h4
        className="text-white"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          paddingLeft: "5%",
          paddingTop: "1.5%",
          paddingBottom: "1%",
          display: "flex",
          alignItems: "center",
          fontFamily: "Daytona W04 Condensed Fat",
          fontSize: "1.5rem",
        }}
      >
        {Title}
      </h4>

      <div id={id_car} className="carousel slide">
        <div className="carousel-inner">
          {/* Primera página: itemsGroup1 (del 1 al 5) */}
          <div className="carousel-item active">
            <div className="d-flex" style={{ paddingLeft: "5%" }}>
              {itemsGroup1.map((item, idx) => (
                <Top10_item
                  key={idx}
                  Link_image={item.Link_image}
                  number={item.number}
                />
              ))}
            </div>
          </div>
          {/* Segunda página: itemsGroup2 (del 6 al 10) */}
          <div className="carousel-item">
            <div className="d-flex" style={{ paddingLeft: "5%" }}>
              {itemsGroup2.map((item, idx) => (
                <Top10_item
                  key={idx}
                  Link_image={item.Link_image}
                  number={item.number}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Controles prev/next */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id_car}`}
          data-bs-slide="prev"
          style={{ left: "-5%" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id_car}`}
          data-bs-slide="next"
          style={{ right: "-5%" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
