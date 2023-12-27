import React from "react";
import WishCard from "./WishCard";
import useDatabaseFirebaseDesires from "../hooks/useDatabaseFirebaseDesires";
import { Wish } from "../type.def";

const DesiresList: React.FC = () => {
  const { desires } = useDatabaseFirebaseDesires();

  const renderWishCards = (filteredDesires: Wish[]) => {
    return desires ? (
      filteredDesires.map((wish: Wish) => (
        <WishCard key={wish.id} wish={wish} />
      ))
    ) : (
      <div className="text-gray-500">Non c'è nulla...</div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-transparent flex flex-col items-center">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Da Fare</h1>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Per Ludo Orcoide😠</h3>
          {renderWishCards(
            desires?.filter(
              (wish: Wish) => !wish.completed && wish.from === "Ludovico"
            )
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Per Nicole Bellissima Mia Prencipesa😾
          </h3>
          {renderWishCards(
            desires?.filter(
              (wish: Wish) => !wish.completed && wish.from === "Nicole"
            )
          )}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">Fatti</h1>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Per Ludo Orcoide😠</h3>
          {renderWishCards(
            desires?.filter(
              (wish: Wish) => wish.completed && wish.from === "Ludovico"
            )
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Per Nicole Bellissima Mia Prencipesa😾
          </h3>
          {renderWishCards(
            desires?.filter(
              (wish: Wish) => wish.completed && wish.from === "Nicole"
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DesiresList;
