import { request } from "http";
import nc from "next-connect";
import notes from "../../../src/data/data.js";

const getNote = (id) => notes.find((n) => n.id === parseInt(id));
console.log(getNote("1664516978481"));

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: notes });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };
    note[i] = updated;

    res.json({ data: updated });
  })

  .delete((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    notes.splice(i, 1);
    res.json({ data: req.query.id });
  });

console.log(notes);
export default handler;
