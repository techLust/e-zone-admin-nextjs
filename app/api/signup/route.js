import connectDB from "@/_utils/db_conn";
import { SignUpModel } from "@/models/signupModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method === 'POST') {
        try {
            console.log("Sign up API called")
            
            const { email, password, repeat_password, first_name, last_name, phone, company } = await req.json();

            if (email && password && repeat_password && first_name && last_name && phone && company) {
                await connectDB();
                const userDetails = SignUpModel({email, password, repeat_password, first_name, last_name, phone, company})
                userDetails.save()
                return NextResponse.json({ status: 'success', message: 'Sing up successfull', data: userDetails  }, { status: 200 })
            } else {
                return NextResponse.json({ status: 'failed', message: 'please enter correct value'}, { status: 500 })
            }
        } catch (e) {
            return NextResponse.json({ status: 'failed', message: 'Something went wrong' }, { status: 500 })
        }
    }
}


// const handler =  async (req, res) => {
//     if (req.method === 'POST') {
//         try {
//             await connectDB();
//             console.log("BODY", req.body)
//             const { email, password, repeat_password, first_name, last_name, phone, company } = req.body;

//             if (email && password && repeat_password && first_name && last_name && phone && company) {
//                 return NextResponse.status(200).json({ status: 'success', message: 'Sing up successfull' })
//             } else {
//                 return NextResponse.status(500).json({ status: 'failed', message: 'please enter correct value' })
//             }
//         } catch (e) {
//             return NextResponse.status(500).json({ status: 'failed', message: 'Something went wrong' })
//         }

//     }

// }

// export default handler