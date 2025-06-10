import cors from "cors";
import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import Module from "./Module.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import CourseRoutes from "../Kambaz/Courses/routes.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  app.use(cors());   
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  Module(app)
  WorkingWithArrays(app)
  CourseRoutes(app);
}
