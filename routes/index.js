import express from "express";
const router = express.Router();
const todosController = require("../controllers").todos;
const todoItemsController = require("../controllers").todoitems;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API!"
  })
);

router.post("/api/todos", todosController.create);
router.post("/api/todos/:todoId/items", todoItemsController.create);

router.get("/api/todos", todosController.list);
router.get("/api/todos/:todoId", todosController.retrieve);

router.patch("/api/todos/:todoId", todosController.update);
router.patch(
  "/api/todos/:todoId/items/:todoItemId",
  todoItemsController.update
);

router.delete("/api/todos/:todoId", todosController.destroy);
router.delete(
  "/api/todos/:todoId/items/:todoItemId",
  todoItemsController.destroy
);

router.post("/api/todos/:todoId/items", todoItemsController.create);

router.all("/api/todos/:todoId/items", (req, res) => {
  res.status(405).send({
    message: "Method Not Allowed"
  });
});

module.exports = router;
