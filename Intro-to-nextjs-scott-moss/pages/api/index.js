import nc from "next-connect";
//we connect our server like this , this is a next server behind this express work

const handler = nc()
  .get((req, res) => {
    res.json({ data: "Hello" });
  })

  .post((req, res) => {
    res.json({ data: "posted" });
  });

export default handler;
