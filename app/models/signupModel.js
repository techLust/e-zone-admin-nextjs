import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String,
    },
    repeat_password: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    phone: {
        type: String,
    },
    company: {
        type: String
    }
}, {
    timestamps: true,
})

export const SignUpModel = mongoose.models.admin || mongoose.model('admin', SignUpSchema);