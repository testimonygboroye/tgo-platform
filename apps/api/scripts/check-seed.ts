import "dotenv/config";

import mongoose from "mongoose";

import { connectDB } from "./src/config/db";

import Role from "./src/modules/rbac/models/role.model";

import Permission from "./src/modules/rbac/models/permission.model";

async function run() {
  await connectDB();

  console.log("\nRoles:\n");

  console.log(await Role.find());

  console.log("\nPermissions:\n");

  console.log(await Permission.find());

  await mongoose.disconnect();
}

run();
