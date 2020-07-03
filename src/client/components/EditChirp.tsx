import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChirpCardProps } from "../utils/types";
import { useParams, useHistory } from "react-router-dom";

const EditChirp: React.FC<ChirpCardProps> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { id } = useParams();

  let history = useHistory();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${id}`);
      let chirp = await res.json();
      setUsername(chirp.username);
      setMessage(chirp.message);
    })();
  }, [id]);

  const editChirp = (): void => {
    let editedChirp = {
      username: username,
      message: message,
    };

    fetch(`/api/chirps/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedChirp),
    })
      .then((response) => response.json())
      .then((editedChirp) => {
        console.log("Success:", editedChirp);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    history.push("/");
  };

  const deleteChirp = (): void => {
    fetch(`/api/chirps/${id}`, {
      method: "delete",
    }).then((response) =>
      response.json().then((json) => {
        return json;
      })
    );
    history.push("/");
  };

  return (
    <div className="container">
      <div className="card-body shadow">
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="user"
            className="form-control"
            value={username}
            onChange={handleNameChange}
          ></input>
          <label htmlFor="message">Message</label>
          <form>
            <textarea
              name="myTextBox"
              value={message}
              onChange={handleMessageChange}
              className="form-control"
              cols={50}
              rows={15}
            ></textarea>
          </form>
          <button
            type="submit"
            onClick={editChirp}
            className="editBtn btn btn-outline-primary"
          >
            Edit Chirp
          </button>
          <button
            type="submit"
            onClick={deleteChirp}
            className="deleteBtn btn btn-outline-danger"
          >
            Delete Chirp
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditChirp;
