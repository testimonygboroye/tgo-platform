import { Router } from "express";

import { getTestimonials } from "../controllers/get-testimonials.controller";
import { createTestimonial } from "../controllers/create-testimonial.controller";

const router = Router();

router.get("/", getTestimonials);

router.post("/", createTestimonial);

export default router;
