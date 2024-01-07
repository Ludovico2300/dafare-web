import { useEffect, useState } from "react";
import { databaseData } from "../firebase.config";
import { ref, onValue, set, update, remove } from "firebase/database";
import { Todo } from "../type.def";

export default function useDatabaseFirebase() {
  const [todos, setTodos] = useState([]);

  //READ DATABASE
  useEffect(() => {
    onValue(ref(databaseData), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setTodos(data.todos);
      }
    });
  }, []);

  //WRITE DATABASE
  const writeToDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Todo
  ) => {
    set(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      from: newData.from,
      completed: newData.completed,
      motivazione: newData.motivazione,
    });
  };

  //UPDATE DATABASE
  const updateDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Todo
  ) => {
    update(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      title: newData.title,
      from: newData.from,
      completed: newData.completed,
      motivazione: newData.motivazione,
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
    todos,
    writeToDatabase,
    updateDatabase,
    deleteFromDatabase,
  };
}
