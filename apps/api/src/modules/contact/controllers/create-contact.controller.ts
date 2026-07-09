import { Request, Response } from "express";
import { CreateContactService } from "../services/create-contact.service";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const contact =
    await CreateContactService.execute(req.body);

  res.status(201).json({
    success: true,
    data: contact,
  });
};
