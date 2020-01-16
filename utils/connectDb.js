import mongoose from "mongoose"
const connection = {}

async function connectDB() {
  if (connection.isConnected) {
    // use existing database connection
    console.log("using existing connection");
    return;
  }
  // use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("db connected 🚀");
}

export default connectDB;