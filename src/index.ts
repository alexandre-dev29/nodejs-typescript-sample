import express from "express"

const app = express();

app.use(express.json())

const add = (a: number, b: number): number => {
    return a+b;
}

app.get("/", (req, res) => {
    res.send({message: "Hello everyone", sumIs: add(2,5)});
})

app.listen(3001, () => {
    console.log("started")
})
