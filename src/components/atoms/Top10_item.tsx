import React from "react";

interface Top10ItemProps {
  Link_image: string;
  number: number;
}

export const Top10_item = ({ Link_image, number }: Top10ItemProps) => {
  return (
    <div className="top10-card-wrapper position-relative">
      {/* Poster */}
      <img
        src={Link_image}
        alt={`Top 10 Película #${number}`}
        className="d-block w-100 top10-poster"
      />
      {/* Número gigante */}
      <span className="top10-number">{number}</span>
      
      {/* Tres puntos de menú (igual que en tus C_item) */}
      <div className="top10-dots position-absolute">
        &bull;&bull;&bull;
      </div>
    </div>
  );
};
