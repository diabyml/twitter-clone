require("dotenv").config();
import http from "http";
import app from "./app";

const PORT = process.env.PORT || 4000;

const main = async () => {
  const server = http.createServer(app);
  server.listen(PORT, () =>
    console.log(`Listening on http://localhost:${PORT}`)
  );
};

main().catch((err) => console.log(`An error occured: ${err}`));
