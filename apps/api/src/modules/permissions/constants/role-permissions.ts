export const ROLE_PERMISSIONS: Record<
  string,
  string[]
> = {
  user: [
    "posts.create",
    "posts.update",
  ],

  verified: [
    "posts.create",
    "posts.update",
    "posts.delete",
  ],

  creator: [
    "posts.create",
    "posts.update",
    "posts.delete",
  ],

  moderator: [
    "users.read",
    "posts.create",
    "posts.update",
    "posts.delete",
  ],

  admin: [
    "users.read",
    "users.update",
    "users.delete",

    "roles.read",
    "roles.update",

    "permissions.read",

    "posts.create",
    "posts.update",
    "posts.delete",
  ],

  super_admin: [
    "*",
  ],
};
