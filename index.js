const express = require("express");
const connectDB = require("./src/configs/db");
require("dotenv").config();

const app = express();

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDoc = YAML.load("./swagger.yaml");

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use("/url", require("./src/routes/index"));
app.use("/api/url", require("./src/routes/url"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// , () => console.log(`Server running on port ${PORT}`)
