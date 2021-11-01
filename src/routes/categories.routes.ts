import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { importCategoryController } from "../modules/cars/useCases/importCategory/index";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const upload = multer({
    dest: "./tmp",
});
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    importCategoryController.handle(request, response);
});

export { categoriesRoutes };