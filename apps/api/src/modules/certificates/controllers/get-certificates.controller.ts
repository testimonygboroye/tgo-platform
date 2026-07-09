import { Request, Response } from "express";
import { GetCertificatesService } from "../services/get-certificates.service";

export const getCertificates = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const certificates =
    await GetCertificatesService.execute();

  res.json({
    success: true,
    data: certificates,
  });
};
