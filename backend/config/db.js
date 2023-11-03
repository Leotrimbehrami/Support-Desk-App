import mongoose from "mongoose";

 export const connectDB = async () => {
 try {
  const connect = await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)
 } catch (error) {
  console.log(`Error: ${error.message}`.red.underline.bold)
  process.exit(1)
 }
}

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("MONGO_URI is: ", process.env.MONGO_URI); // Hinzugefügte Zeile
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.underline.bold);
//     process.exit(1);
//   }
// };
