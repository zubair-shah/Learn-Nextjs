import nc from "next-connect";
import notes from "../../../src/data/data.js";

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };
    notes.push(note);
    res.json({ data: note });
  });
console.log(notes);
export default handler;
