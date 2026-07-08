import Analytics from "../models/analytics.model";

export class GetDashboardAnalyticsService {
  static async execute() {
    const totalRequests = await Analytics.countDocuments();

    const successfulRequests =
      await Analytics.countDocuments({
        statusCode: {
          $gte: 200,
          $lt: 300,
        },
      });

    const failedRequests =
      await Analytics.countDocuments({
        statusCode: {
          $gte: 400,
        },
      });

    const averageResponse = await Analytics.aggregate([
      {
        $group: {
          _id: null,
          average: {
            $avg: "$responseTime",
          },
        },
      },
    ]);

    const topEndpoints = await Analytics.aggregate([
      {
        $group: {
          _id: "$path",
          requests: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          requests: -1,
        },
      },
      {
        $limit: 10,
      },
    ]);

    const methods = await Analytics.aggregate([
      {
        $group: {
          _id: "$method",
          total: {
            $sum: 1,
          },
        },
      },
    ]);

    return {
      totalRequests,
      successfulRequests,
      failedRequests,
      averageResponseTime:
        averageResponse[0]?.average ?? 0,
      topEndpoints,
      methods,
    };
  }
}
