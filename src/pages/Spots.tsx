import React from "react";
import SpotCard from "../components/SpotCard";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import { Spot } from "../type.def";

export default function Spots() {
  const { spots } = useDatabaseFirebase();

  return (
    <>
      {spots &&
        spots.map((spot: Spot) => {
          return <SpotCard key={spot.id} spot={spot} />;
        })}
    </>
  );
}
