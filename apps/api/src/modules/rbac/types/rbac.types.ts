export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;

  permissions: string[];

  protected: boolean;

  createdAt: Date;

  updatedAt: Date;
}
