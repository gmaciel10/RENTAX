import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/carUseCase/createCar/CreateCarController";
import { ListCarsController } from "@modules/cars/useCases/carUseCase/listCars/ListCarsController";

const carRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();

carRoutes.post("/", createCarController.handle);
carRoutes.get("/", listCarsController.handle);

export { carRoutes };
