import { Request, Response } from "express";
import { GetContactsService } from "../services/get-contacts.service";

export const getContacts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const contacts =
    await GetContactsService.execute();

  res.json({
    success: true,
    data: contacts,
  });
};
