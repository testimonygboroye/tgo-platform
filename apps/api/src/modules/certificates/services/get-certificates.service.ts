import Certificate from "../models/certificate.model";

export class GetCertificatesService {
  static async execute() {
    return Certificate.find().sort({
      createdAt: -1,
    });
  }
}
