import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { databaseData } from "../firebase.config";
import useAuthFirebase from "../hooks/useAuthFirebase";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import { Spot } from "../type.def";

export default function Create() {
  const navigate = useNavigate();
  const { state } = useLocation(); // state has type of unknown, so i decided to create a new state, originalCard
  const { spots, writeToDatabase, updateDatabase, deleteFromDatabase } =
    useDatabaseFirebase();
  const { currentUser } = useAuthFirebase();
  const [originalSpot, setOriginalSpot] = useState<Spot>();
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setImage("");
  };

  const presetForm = () => {};

  useEffect(() => {}, [originalSpot]);

  const handleAddPost = async () => {
    try {
      writeToDatabase(databaseData, "/spots/", spots.length, {
        title: title,
        url: url,
        image: image
          ? image
          : "./assets/tabs/notizie-ea/generic-electronic-arts.png", // replace with a placeholder
        id: spots.length,
      });
      alert("Success");
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleEditPost = async () => {
    try {
      if (originalSpot)
        updateDatabase(databaseData, "/spot/", originalSpot?.id, {
          title: title,
          url: url,
          image: image
            ? image
            : "./assets/tabs/notizie-ea/generic-electronic-arts.png", // replace with a placeholder
          id: spots.length,
        });
      alert("Success");
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleDeletePost = async () => {
    try {
      if (originalSpot)
        deleteFromDatabase(databaseData, "/spots/", originalSpot?.id);
      alert("Success");
      navigate("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {currentUser && currentUser?.email === "ludovicocolucci@gmail.com" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw",
            }}
          >
            {/* FORM SECTION */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Title</h1>
              <input
                placeholder="Title"
                type="text"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h1>Url</h1>
              <input
                placeholder="Url"
                type="text"
                name="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <h1>Image</h1>
              <input
                placeholder="Image"
                name="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          {/* BUTTON DIV SECTION */}
          <div
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              style={{
                margin: "1rem",
                padding: "7px",
                fontSize: "2rem",
                border: "3px solid black",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={resetForm}
            >
              Reset
            </button>

            {originalSpot && (
              <button
                style={{
                  margin: "1rem",
                  padding: "7px",
                  fontSize: "2rem",
                  border: "3px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={presetForm}
              >
                Reload Original Card
              </button>
            )}

            <button
              style={{
                margin: "1rem",
                padding: "7px",
                fontSize: "2rem",
                border: "3px solid black",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onSubmit={originalSpot ? handleEditPost : handleAddPost}
              onClick={originalSpot ? handleEditPost : handleAddPost}
            >
              {originalSpot ? "Edit Post" : "Add Post"}
            </button>
            {originalSpot && (
              <button
                style={{
                  margin: "1rem",
                  padding: "7px",
                  fontSize: "2rem",
                  border: "3px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onSubmit={handleDeletePost}
                onClick={handleDeletePost}
              >
                Delete Post
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1>You are not allowed to visit this page!!!</h1>
      )}
    </div>
  );
}
