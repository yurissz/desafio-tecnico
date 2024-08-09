const express = require("express");
const user = require("../controllers/user");
const product = require("../controllers/products")
const request = require("../controllers/requests")

const route = express()

route.get("/user", user.readUsers)
route.get("/user/:id", user.readOneUser)
route.post("/user", user.registerUser)
route.put("/user/:id", user.updateUser)
route.delete("/user/:id", user.deleteUser)
route.post("/login", user.login)

route.get("/product", product.readProducts)
route.get("/product/:id", product.readOneProduct)
route.post("/product", product.registerProduct)
route.put("/product/:id", product.updateProduct)
route.delete("/product/:id", product.deleteProduct)

route.get("/request", request.readRequests)
route.get("/request/:id", request.readOneRequest)
route.post("/request", request.createRequest)
route.put("/request/:id", request.updateRequest)
route.delete("/request/:id", request.deleteRequest)

module.exports = route
