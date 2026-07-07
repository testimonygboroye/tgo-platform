export interface ActivityLog {
  action: string;
  performedBy?: string;
  timestamp: Date;
  details?: string;
}

export interface BaseDocument {
  createdBy?: string;
  updatedBy?: string;

  status: "active" | "inactive" | "draft" | "archived";

  deletedAt?: Date | null;

  version: number;

  activityHistory: ActivityLog[];

  createdAt: Date;
  updatedAt: Date;
}
