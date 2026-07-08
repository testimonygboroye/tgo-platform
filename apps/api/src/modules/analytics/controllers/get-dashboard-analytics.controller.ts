import { Request, Response } from "express";

import { GetDashboardAnalyticsService } from "../services/get-dashboard-analytics.service";

export const getDashboardAnalytics = async (
  _req: Request,
  res: Response
) => {
  const analytics =
    await GetDashboardAnalyticsService.execute();

  return res.json({
    success: true,
    data: analytics,
  });
};
