import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export const enrollUser = (userId, courseId) => {
  const alreadyEnrolled = Database.enrollments.some(
    (enr) => enr.user === userId && enr.course === courseId
  );
  if (!alreadyEnrolled) {
    Database.enrollments.push({ user: userId, course: courseId });
  }
  return { status: "enrolled" };
};

export const unenrollUser = (userId, courseId) => {
  Database.enrollments = Database.enrollments.filter(
    (enr) => !(enr.user === userId && enr.course === courseId)
  );
  return { status: "unenrolled" };
};

export const findEnrollments = () => {
  return Database.enrollments;
};

export const findCoursesForUser = (userId) => {
  return Database.enrollments
    .filter((e) => e.user === userId)
    .map((e) => e.course);
};