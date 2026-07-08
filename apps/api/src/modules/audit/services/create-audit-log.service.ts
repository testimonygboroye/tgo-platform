import AuditLog from "../models/audit-log.model";

export class CreateAuditLogService {
  static async execute(data: {
    userId?: string; action: string; 
    method: string; path: string; ip?: 
    string; userAgent?: string; 
    statusCode: number;
  }) {
    await AuditLog.create(data);
  }
}
