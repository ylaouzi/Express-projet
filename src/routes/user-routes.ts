import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user-controller";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:uid", getUserById);
router.post("/", createUser);
router.put("/:uid", updateUser);
router.delete("/:uid", deleteUser);

export default router;