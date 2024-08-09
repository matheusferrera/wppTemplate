import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import wppClient from './wppClient.js'; //Inicializando o client wpp
import contacts from "./routes/contacts.js";

// ==============================================================
// ==================== INICIALIZANDO SERVER ====================
// ==============================================================
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use('/contacts', contacts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[Server API] => Running on ${PORT}`);
});


// ==============================================================
// ==================== CONFIGURANDO SWAGGER ====================
// ==============================================================

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "WhatsApp Automation API",
      version: "0.1.0",
      description: "This is a WhatsApp Automation API made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Matheus Ferreira",
        url: "https://matheusferrera.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["**/swagger/*.yaml"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
