export {
  default as rbacRoutes,
} from "./routes/rbac.routes";

export * from "./controllers/create-role.controller";
export * from "./controllers/get-roles.controller";
export * from "./controllers/update-role.controller";
export * from "./controllers/delete-role.controller";

export * from "./services/create-role.service";
export * from "./services/get-roles.service";
export * from "./services/update-role.service";
export * from "./services/delete-role.service";

export * from "./types/rbac.types";
