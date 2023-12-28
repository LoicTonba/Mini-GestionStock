const express = require("express")
const router = express.Router()

const productController = require("../controller/product.controller.js")

router.get("/", productController.getAll)
router.get("/:code", productController.getByCode)
router.post("/", productController.create)
router.put("/:code", productController.update)
router.delete("/:code", productController.delete)

module.exports = router 