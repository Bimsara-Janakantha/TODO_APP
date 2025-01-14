import app from "./app";
import "dotenv/config";

const port = 5000;

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
