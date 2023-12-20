import { useEffect, useState } from "react";
import { databaseData } from "../firebase.config";
import { ref, onValue, set, update, remove } from "firebase/database";
import useAuthFirebase from "./useAuthFirebase";
import { Spot } from "../type.def";

export default function useDatabaseFirebase() {
  const { currentUser } = useAuthFirebase();
  const [spots, setSpots] = useState([]);

  //READ DATABASE
  useEffect(() => {
    onValue(ref(databaseData), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setSpots(data.spots);
      }
    });
  }, []);

  //WRITE DATABASE
  const writeToDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Spot
  ) => {
    set(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      image: newData.image,
      url: newData.url,
      author: currentUser?.displayName,
    });
  };

  //UPDATE DATABASE
  const updateDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Spot
  ) => {
    update(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      image: newData.image,
      url: newData.url,
      author: currentUser?.displayName,
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
    spots,
    writeToDatabase,
    updateDatabase,
    deleteFromDatabase,
  };
}
