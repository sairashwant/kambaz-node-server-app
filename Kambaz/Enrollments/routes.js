import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const status = dao.enrollUser(userId, courseId);
    res.send(status);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const status = dao.unenrollUser(userId, courseId);
    res.send(status);
  });

  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findEnrollments();
    res.send(enrollments);
  });

  app.get("/api/users/:uid/enrollments", (req, res) => {
    const { uid } = req.params;
    const courses = dao.findCoursesForUser(uid);
    res.send(courses);
  });
}
