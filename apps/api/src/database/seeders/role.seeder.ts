import Role from "../../modules/rbac/models/role.model";

export async function seedRoles() {
  const roles = [
    {
      id: "user",
      name: "User",
      description: "Default user",
      permissions: [],
      protected: true,
    },
    {
      id: "verified",
      name: "Verified",
      description: "Verified member",
      permissions: [],
      protected: true,
    },
    {
      id: "creator",
      name: "Creator",
      description: "Content creator",
      permissions: [],
      protected: true,
    },
    {
      id: "moderator",
      name: "Moderator",
      description: "Community moderator",
      permissions: [],
      protected: true,
    },
    {
      id: "admin",
      name: "Administrator",
      description: "Platform administrator",
      permissions: [],
      protected: true,
    },
    {
      id: "super_admin",
      name: "Super Admin",
      description: "Platform owner",
      permissions: ["*"],
      protected: true,
    },
  ];

  for (const role of roles) {
    await Role.updateOne(
      { id: role.id },
      role,
      { upsert: true }
    );
  }
}
