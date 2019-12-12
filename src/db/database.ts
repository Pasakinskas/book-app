import mongoose from "mongoose";

export function initDatabase() {
    const dbURI: string = process.env.DATABASE || "";

    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
        }
    );
}
