import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChirpCardProps } from "../utils/types";
import { useParams, useHistory } from "react-router-dom";

const AddChirp: React.FC<ChirpCardProps> = (props) => {
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

  const addChirp = (): void => {
    let newChirp = {
      username: username,
      message: message,
    };
    fetch(`/api/chirps/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChirp),
    })
      .then((response) => response.json())
      .then((newChirp) => {
        console.log("Success:", newChirp);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    history.push("/");
  };

  return (
    <div className="container">
      <div className="card-body shadow">
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="user"
            placeholder="Name"
            onChange={handleNameChange}
            className="form-control"
          ></input>
          <div className="row">
          <label htmlFor="message">Message</label>
          <form className="col-12">
            <textarea
              name="myTextBox"
              onChange={handleMessageChange}
              className="form-control"
              cols={50}
              rows={15}
              placeholder="enter your message"
            ></textarea>
          </form>
          <button
            type="submit"
            onClick={addChirp}
            className="addBtn btn btn-online-success"
          >
            Add Chirp
          </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddChirp;
