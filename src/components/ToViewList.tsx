import React from "react";
import useDatabaseFirebaseViews from "../hooks/useDatabaseFirebaseViews";
import { ToView } from "../type.def";
import ToviewCard from "./ToviewCard";

const ToViewList: React.FC = () => {
  const { toview } = useDatabaseFirebaseViews();

  const renderToviewCards = (filteredToViews: ToView[]) => {
    return toview ? (
      filteredToViews.map((tw: ToView) => (
        <ToviewCard key={tw.id} toview={tw} />
      ))
    ) : (
      <div className="text-gray-500">Non c'è nulla...</div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-transparent flex flex-col items-center">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Da Vedere</h1>
        <div className="mb-4">
          {renderToviewCards(toview?.filter((tw: ToView) => !tw.started))}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Visti</h1>
        <div className="mb-4">
          {renderToviewCards(toview?.filter((tw: ToView) => tw.started))}
        </div>
      </div>
    </div>
  );
};

export default ToViewList;
