export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateProfileDto {
  firstName?: string | undefined;
  lastName?: string | undefined;
}
