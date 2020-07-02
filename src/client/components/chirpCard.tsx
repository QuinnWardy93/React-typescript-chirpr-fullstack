import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ChirpCardProps } from "../utils/types";

const chirpCard: React.FC<ChirpCardProps> = (props) => {
  return (
    <div key={props.chirps.id} className="card m-4">
      <div className="card-body">
        <h5 className="card-title">{props.chirps.username}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.chirps.message}
        </h6>
        <button >
          <Link to={`/editchirp/${props.chirps.id}/`}>Admin Options</Link>
        </button>
      </div>
    </div>
  );
};

export default chirpCard;
