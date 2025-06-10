import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.send(newAssignment);
  });

  app.get("/api/assignments", (req, res) => {
    const { course } = req.query;
    if (course) {
      const assignments = dao.findAssignmentsForCourse(course);
      res.send(assignments);
    } else {
      const assignments = dao.findAllAssignments();
      res.send(assignments);
    }
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updated = dao.updateAssignment(assignmentId, req.body);
    res.send(updated);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
