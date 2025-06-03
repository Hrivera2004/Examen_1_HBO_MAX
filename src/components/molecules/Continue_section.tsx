import React from "react";
import { Continue_card } from "../atoms/Continue_card";

interface ContinueItem {
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

interface Props {
  items: ContinueItem[];
}

export const Continue_section = ({ items }: Props) => {
    return (
        <section style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: '2rem', marginBottom: '2rem' }}>
            <h4 style={{ color: "white", marginBottom: "1.5rem" }}>Continuar viendo</h4>
            <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", flexWrap: "wrap" }}>
                {items.map((item, idx) => (
                    <Continue_card key={idx} {...item} />
                ))}
            </div>
        </section>
    );
};
