const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing
let id = 2;

const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body: ", req.body);
  //   프론트에서 서버로 보낼때는 프론트에서는 body에 넣어서 보냄
  // req.body에 데이터가 들어있음
  //   express에서 body 에서 데이터를 바디에서 꺼내쓰려면 body-parser가 필요
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});
app.listen(4000, () => {
  console.log("server start!!");
});
