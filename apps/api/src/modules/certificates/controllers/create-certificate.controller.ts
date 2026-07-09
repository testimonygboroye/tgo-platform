import { Request, Response } from "express";
import { CreateCertificateService } from "../services/create-certificate.service";

export const createCertificate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const certificate =
    await CreateCertificateService.execute(req.body);

  res.status(201).json({
    success: true,
    data: certificate,
  });
};
