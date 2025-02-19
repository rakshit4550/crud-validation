import express from 'express';
import { forgotPassword, getUser, login, logout, register, resetassword, verifyOTP } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.post("/register", register)
router.post("/otp-verification", verifyOTP)
router.post("/login", login)
router.post("/logout",isAuthenticated, logout)
router.post("/me",isAuthenticated, getUser)
router.post("/password/forgot", forgotPassword)
router.post("/password/reset/:token", resetassword)

export default router

