import Certificate from "../models/certificate.model";

export class CreateCertificateService {
  static async execute(data: any) {
    return Certificate.create(data);
  }
}
