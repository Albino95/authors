const AuthorsController = require("../controllers/authors.controller");

module.exports = (app) => {

    app.get("/api/authors", AuthorsController.findAllAuthors);

    app.post("/api/authors", AuthorsController.addNewAuthor);

    app.get("/api/authors/:id", AuthorsController.findOneAuthor);

    app.delete("/api/authors/:id", AuthorsController.deleteOneAuthor);

    app.put("/api/authors/:id", AuthorsController.updateOneAuthor);

}