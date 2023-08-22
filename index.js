const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 3001;

(async () => {
  const server = express();
  server.use(express.json());

  server.use(cors());
  ["people", "projects", "skills", "skill-levels", "skill-types", "topics"].forEach(
    (type) => {
      server.use(`/${type}`, express.static(path.join(__dirname, type)));
    }
  );

  server.listen(PORT, async (err) => {
    console.log(`> Ready on localhost:${PORT} - env ${process.env.NODE_ENV}`);
  });
})();
