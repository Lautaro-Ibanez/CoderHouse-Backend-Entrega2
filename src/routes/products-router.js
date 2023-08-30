import BaseRouter from "./router.js";
import productsController from "../controllers/products.controller.js";

export default class ProductRouter extends BaseRouter {
  init() {
    this.get("/", ["PUBLIC"], productsController.getProducts);

    this.post("/", ["ADMIN", "PREMIUN"], productsController.addProduct);

    this.get("/:pid", ["PUBLIC"], productsController.getProductById);

    this.put("/:pid", ["ADMIN", "PREMIUN"], productsController.updateProduct);

    this.delete("/:pid", ["ADMIN", "PREMIUN"], productsController.deleteProduct);
  }
}
