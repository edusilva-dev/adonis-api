import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

// ! With Adonis, we don't need to create all these routes. Can be simplified
// Route.get("/posts", "PostsController.index");
// Route.get("/posts/:id", "PostsController.show");
// Route.post("/posts", "PostsController.store");
// Route.put("/posts/:id", "PostsController.update");
// Route.delete("/posts/:id", "PostsController.destroy");

// * Correct way to simplify routes
Route.resource("/posts", "PostsController").apiOnly();
