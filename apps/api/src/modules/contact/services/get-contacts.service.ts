import Contact from "../models/contact.model";

export class GetContactsService {
  static async execute() {
    return Contact.find().sort({
      createdAt: -1,
    });
  }
}
