import mongoose from "mongoose";


const connectDatabase = () => {
    console.log("Aguarde a conexão com o banco de dados");

    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((error) => console.log(error))
};

export default connectDatabase;