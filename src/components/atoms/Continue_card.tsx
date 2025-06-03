import React from "react";

interface Props {
  Link_image: string;
  title: string;
  year: number;
  age: string;
  progress: number;
  isSerie?: boolean;
  episodeTitle?: string;
  temporada?: number;
  episodio?: number;
}

export const Continue_card = ({
  Link_image,
  title,
  year,
  age,
  progress,
  isSerie,
  episodeTitle,
  temporada,
  episodio
}: Props) => {
  return (
<div className="continue_card_wrapper" style={{ flex: "1 1 22%", minWidth: "260px", maxWidth: "300px", margin: "0 5px" }}>
      <div style={{ position: "relative" }}>
        <img className="continue_card_image" src={Link_image} alt={title} />
        <div className="continue_play_button">▶</div>

        <div className="continue_bar">
          <div
            className="continue_bar_fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div style={{ color: "white", marginTop: "0.5rem" }}>
        {isSerie && temporada && episodio && episodeTitle ? (
          <>
            <div style={{ fontWeight: "bold" }}>
              T{temporada} E{episodio} <span style={{ fontWeight: "normal" }}>{episodeTitle}</span>
            </div>
            <div>{age}</div>
          </>
        ) : (
          <>
            <div style={{ fontWeight: "bold" }}>{title}</div>
            <div>{age}   {year}</div>
          </>
        )}
      </div>
    </div>
  );
};