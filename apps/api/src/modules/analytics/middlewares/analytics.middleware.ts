import {
  Request,
  Response,
  NextFunction,
} from "express";

import Analytics from "../models/analytics.model";

export const analyticsTracker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();

  res.on("finish", async () => {
    try {
      const rawSessionId = req.headers["x-session-id"];

const sessionId =
  typeof rawSessionId === "string"
    ? rawSessionId
    : Array.isArray(rawSessionId)
      ? rawSessionId[0] ?? null
      : null;

      await Analytics.create({
        userId: (req as any).user?.userId ?? null,

        sessionId: Array.isArray(sessionId)
          ? sessionId[0]
          : sessionId ?? null,

        event: `${req.method} ${req.originalUrl}`,

        method: req.method,

        path: req.originalUrl,

        ip: req.ip ?? "",

        userAgent: req.get("user-agent") ?? "",

        referrer: req.get("referer") ?? "",

        statusCode: res.statusCode,

        responseTime: Date.now() - start,
      });
    } catch {}
  });

  next();
};
