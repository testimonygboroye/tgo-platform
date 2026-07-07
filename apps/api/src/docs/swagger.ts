import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TGO Platform API",
      version: "1.0.0",
      description: "Official API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
  },
  apis: [],
};

export const setupSwagger = ( app: Express 
): void => {
  const specs = swaggerJsdoc(options); 
  app.use(
    "/docs", swaggerUi.serve, 
    swaggerUi.setup(specs)
  );
};
