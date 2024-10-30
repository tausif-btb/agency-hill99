const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query); // Pass req.query for filtering
    if (students.length === 0) {
        throw new ApiError(404, "Students not found");
    }
    res.status(200).json({ data: students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    console.log(req.body);
    const result = await addNewStudent(req.body); // Use req.body for new student data
    res.status(201).json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const result = await updateStudent(req.body); // Use req.body for updated data
    res.status(200).json(result);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const student = await getStudentDetail(req.params.id); // Use req.params.id for specific student ID
    res.status(200).json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const result = await setStudentStatus(req.body); // Use req.body for status change data
    res.status(200).json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
