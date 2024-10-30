const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");

console.log("students-router.js");
router.get("/getAllStudents", studentController.handleGetAllStudents);
router.post("/", studentController.handleAddStudent);
router.get("/:id", studentController.handleGetStudentDetail);
router.post("/:id/status", studentController.handleStudentStatus);
router.put("/:id", studentController.handleUpdateStudent);

module.exports = { studentsRoutes: router };
