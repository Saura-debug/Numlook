import express from "express";
import lookupRouter from "./routes/lookup.routes";
import { errorHandler } from "./middleware/error.middleware";
import authRouter from "./routes/auth.routes";
import searchHistoryRouter from "./routes/searchHistory.routes";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import helmet from "helmet";
import cors from "cors";





const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://yourfrontend.com",
    ],

    credentials: true,
  })
);


app.use("/api/v1", lookupRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorHandler);
app.use(
  "/api/v1/search-history",
  searchHistoryRouter
);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;