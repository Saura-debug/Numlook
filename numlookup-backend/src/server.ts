import app from "./app";
import "./config/env";
import prisma from "./prisma/client";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", async () => {
  console.log("Shutting down...");

  await prisma.$disconnect();

  process.exit(0);
});