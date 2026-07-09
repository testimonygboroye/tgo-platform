import { Router } from "express";

import { getCertificates } from "../controllers/get-certificates.controller";
import { createCertificate } from "../controllers/create-certificate.controller";

const router = Router();

router.get("/", getCertificates);

router.post("/", createCertificate);

export default router;
