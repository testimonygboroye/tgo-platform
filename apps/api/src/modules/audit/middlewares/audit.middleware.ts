import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  CreateAuditLogService,
} from "../services/create-audit-log.service";

export const auditLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on("finish", async () => {
    try {
      await CreateAuditLogService.execute({
        userId: (req as any).user?.userId,
        action: `${req.method} ${req.originalUrl}`,
        method: req.method,
        path: req.originalUrl,
        ip: req.ip ?? "",
        userAgent: req.get("user-agent") ?? "",
        statusCode: res.statusCode,
      });
    } catch {}
  });

  next();
};
