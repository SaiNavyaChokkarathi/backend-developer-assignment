import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();
router.use(protect);
router.get("/", getTasks);
router.post("/", checkRole(["user", "admin"]), createTask);
router.put("/:id", checkRole(["admin"]), updateTask);
router.delete("/:id", checkRole(["admin"]), deleteTask);

export default router;