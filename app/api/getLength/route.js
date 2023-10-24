import axios from "axios";
import { SignUpModel } from "@/models/signupModel";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const adminLength = await SignUpModel.countDocuments();
        const userLength = await axios.get('http://localhost:4000/get/user');
        const vendorLength = await axios.get('http://localhost:4000/get/vendor');
        const productLength = await axios.get('http://localhost:4000/get/product');

        const allLength = {
            adminLength,
            user: userLength.data.data.length,
            vendor: vendorLength.data.data.length,
            products: productLength.data.data.length
        }

        return NextResponse.json({ status: 'success', allLength }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ status: 'failed', message: 'length not found' }, { status: 500 })

    }
}