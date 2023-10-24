import connectDB from "@/_utils/db_conn";
import { SignUpModel } from "@/models/signupModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        console.log('Signin API called');

        const { email, password } = await req.json();
        console.log(email, password)

        if (!(email && password)) {
            return NextResponse.json({ status: 'failed', message: 'no creds' }, { status: 500 });
        }

        if (email && password) {
            connectDB();
            const userDetails = await SignUpModel.find({ email })
            console.log('USER DETAILS', userDetails[0])
            if (userDetails[0].email === email) {
                return NextResponse.json({ status: 'success', message: 'signin successful', data: userDetails[0] }, { status: 200 });
            }
        }

    } catch (e) {
        console.log(e)
        return NextResponse.json({ status: 'failed', message: 'something went wrong' }, { status: 500 });
    }
}