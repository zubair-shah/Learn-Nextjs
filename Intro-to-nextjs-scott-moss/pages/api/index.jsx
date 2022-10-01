// import nc from 'next/connect';

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("ContentType , 'application/json");
    res.end(JSON.stringify({message: "hello"}))

}