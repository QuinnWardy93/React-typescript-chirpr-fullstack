import * as express from "express";
import * as chirpStore from "./chirpstore";
import { Chirp } from "../utils/types";

let router = express.Router();

router.get("/", (req, res) => {
  const data = chirpStore.GetChirps();
  const chirps = Object.keys(data).map(key => {
    return {
      id: key,
      username: data[key].username,
      message: data[key].message,
    };
  });
  chirps.pop();  // remove nextid property
  res.json(chirps);
});

router.get("/:id", (req, res) => {
  res.send(chirpStore.GetChirp(req.params.id));
});

router.post("/", (req, res) => {
  let chirpObj: Chirp = {
    username: req.body.username,
    message: req.body.message,
  };
  chirpStore.CreateChirp(chirpObj);

  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let chirpObj: Chirp = {
    username: req.body.username,
    message: req.body.message,
  };
  chirpStore.UpdateChirp(req.params.id, chirpObj);

  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  chirpStore.DeleteChirp(req.params.id);

  res.send(`chirp ${req.params.id} was deleted`);
});

export default router;
