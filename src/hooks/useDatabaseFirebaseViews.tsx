import { useEffect, useState } from "react";
import { databaseData } from "../firebase.config";
import { ref, onValue, set, update, remove } from "firebase/database";
import { ToView } from "../type.def";

export default function useDatabaseFirebaseViews() {
  const [toview, setToview] = useState([]);

  //READ DATABASE
  useEffect(() => {
    onValue(ref(databaseData), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setToview(data.toview);
      }
    });
  }, []);

  //WRITE DATABASE
  const writeToDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: ToView
  ) => {
    set(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      link: newData.link ? newData.link : "",
      started: newData.started,
    });
  };

  //UPDATE DATABASE
  const updateDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: ToView
  ) => {
    update(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      link: newData.link ? newData.link : "",
      started: newData.started,
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
    toview,
    writeToDatabase,
    updateDatabase,
    deleteFromDatabase,
  };
}
