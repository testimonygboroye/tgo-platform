import { Permission } from "../types/permission.types";

export const PERMISSIONS: Permission[] = [
  {
    id: "users.read",
    name: "Read Users",
    description: "View user accounts",
  },
  {
    id: "users.update",
    name: "Update Users",
    description: "Edit user accounts",
  },
  {
    id: "users.delete",
    name: "Delete Users",
    description: "Delete user accounts",
  },
  {
    id: "roles.read",
    name: "Read Roles",
    description: "View system roles",
  },
  {
    id: "roles.update",
    name: "Update Roles",
    description: "Assign user roles",
  },
  {
    id: "permissions.read",
    name: "Read Permissions",
    description: "View available permissions",
  },
  {
    id: "permissions.update",
    name: "Update Permissions",
    description: "Manage role permissions",
  },
  {
    id: "posts.create",
    name: "Create Posts",
    description: "Create platform posts",
  },
  {
    id: "posts.update",
    name: "Update Posts",
    description: "Edit posts",
  },
  {
    id: "posts.delete",
    name: "Delete Posts",
    description: "Delete posts",
  },
  {
    id: "system.manage",
    name: "System Management",
    description: "Full platform management",
  },
];
