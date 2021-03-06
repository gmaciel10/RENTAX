import "express-async-errors";

import "reflect-metadata";

import "../../container/index";

import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import swaggerUI from "swagger-ui-express";

import { AppError } from "@shared/errors/AppError";
import { router } from "@shared/infra/http/routes";
import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../swagger.json";

createConnection();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ message: err.message });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3333, () => {
    console.log("aplicação rodando");
});
