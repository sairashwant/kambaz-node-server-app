import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentsForCourse(courseId) {
  return Database.assignments.filter((a) => a.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments.push(newAssignment);
  return newAssignment;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find((a) => a._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter(
    (a) => a._id !== assignmentId
  );
  return { status: "deleted" };
}
