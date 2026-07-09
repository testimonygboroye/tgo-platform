import Contact from "../models/contact.model";

export class CreateContactService {
  static async execute(data: any) {
    return Contact.create(data);
  }
}
