import "dotenv/config";

import app from "./app";
import { connectDB } from "./config/db";
import { seedRoles } from "./database/seeders/role.seeder";
import { seedPermissions } from "./database/seeders/permission.seeder";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    await seedPermissions();
    await seedRoles();

    app.listen(PORT, () => {
      console.log("");
      console.log("🚀 ===============================");
      console.log("🚀 TGO Platform Backend Started");
      console.log(`🌍 Server : http://localhost:${PORT}`);
      console.log(`📦 Environment : ${process.env.NODE_ENV}`);
      console.log("🚀 ===============================");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();
