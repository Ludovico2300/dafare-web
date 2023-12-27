import { useEffect, useState } from "react";
import { databaseData } from "../firebase.config";
import { ref, onValue, set, update, remove } from "firebase/database";
import { Wish } from "../type.def";

export default function useDatabaseFirebaseDesires() {
  const [desires, setDesires] = useState([]);

  //READ DATABASE
  useEffect(() => {
    onValue(ref(databaseData), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setDesires(data.desires);
      }
    });
  }, []);

  //WRITE DATABASE
  const writeToDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Wish
  ) => {
    set(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      from: newData.from,
      completed: newData.completed,
    });
  };

  //UPDATE DATABASE
  const updateDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Wish
  ) => {
    update(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      from: newData.from,
      completed: newData.completed,
    });
  };
  //DELETE FROM DATABASE
  const deleteFromDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any
  ) => {
    remove(ref(database, endpoint + identifierEndpoint));
  };

  return {
    desires,
    writeToDatabase,
    updateDatabase,
    deleteFromDatabase,
  };
}
