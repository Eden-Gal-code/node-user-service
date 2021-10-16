import { default as express } from "express";
import { default as bodyParser } from "body-parser";
import { UserApi } from "./users/index.js";
import { logError, returnError } from "./middleware/index.js";
const app = express();
app.use(bodyParser.json());

app.use("/api/", UserApi);
app.use(logError);
app.use(returnError);
export default app;
