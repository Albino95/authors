const Author = require("../models/authors.model");

module.exports = {
    findAllAuthors: (request, response) => {
        Author.find({})
            .then((allAuthors) => {
                console.log(allAuthors);
                response.json(allAuthors);
            })
            .catch(() => {
                console.log("Find all Failed");
                response.json({message: err})
            })
    },

    addNewAuthor: (request, response) => {
        Author.create(request.body)
            .then((newProd) => {
                console.log(newProd);
                response.json(newProd);
            })
            .catch((err) => {
                console.log("Something went wrong with Author Creation")
                response.status(400).json(err);

            })
    },

    findOneAuthor: (request, response) => {
        Author.findOne({_id: request.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor);
                response.json(oneAuthor)
            })
            .catch((err) => {
                console.log("There was this error in finding your Author: " + err)
                response.json({message: "Error with finding the author", err})
            })
    },

    deleteOneAuthor: (request, response) => {
        Author.deleteOne({_id: request.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor);
                response.json(deletedAuthor)
            })
            .catch((err) => {
                console.log("There was this error in finding your Author: " + err)
                response.json({message: "Error wit finding the game", err})
            })
    },

    updateOneAuthor: (request, response) => {
        Author.findOneAndUpdate({_id: request.params.id},
            request.body,
            {new: true, runValidators: true}

            )
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                response.json(updatedAuthor)
            })
            .catch((err) => {
                console.log("There was this error with updating your Author: " + err)
                response.json({message: "Error with updating the author", err})
            })
    }


}