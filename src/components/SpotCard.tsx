import React from "react";
import { Spot } from "../type.def";

type SpotProps = {
  spot: Spot;
};

export default function SpotCard(props: SpotProps) {
  const { spot } = props;

  return (
    <a href={spot.url}>
      <div className="flex flex-col border border-black border-solid justify-between items-center h-1/4 bg-white my-2">
        <img src={spot.image} alt={spot.title} width={"50%"} />
        <div className="font-bold">{spot.title}</div>
        <div>Made by {spot.author}</div>
      </div>
    </a>
  );
}
