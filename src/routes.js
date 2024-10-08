import { Router } from "express";
import multer from "multer";
import authMiddleware from "./middlewares/auth";

import multerConfig from "./config/multer";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryControllers";

const routes = new Router();
const Upload = multer(multerConfig);


routes.post('/users',  UserController.store) ;
routes.post("/session", SessionController.store);

routes.use(authMiddleware);
routes.post("/products", Upload.single("file"), ProductController.store)
routes.get("/products",  ProductController.index);

routes.post("/Categories", CategoryController.store)
routes.get("/Categories",  CategoryController.index);


  export default routes;