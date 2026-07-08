const mongoose = require("mongoose");

async function run() {
  await mongoose.connect("mongodb+srv://testimonygboroyetech_db_user:TGOWEBDEV1708@tgo-webdev-cluster-1.axrin38.mongodb.net/tgo_platform?retryWrites=true&w=majority&appName=TGO-WEBDEV-CLUSTER-1");

  await mongoose.connection.collection("userroles").insertOne({
    userId: new mongoose.Types.ObjectId("6a4e95c0bc1c465f2f443f6f"),
    roleId: "super_admin",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  console.log("Super admin role assigned");

  process.exit();
}

run();
