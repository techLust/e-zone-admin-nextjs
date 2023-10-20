import connectDB from "@/_utils/db_conn";
import { SignUpModel } from "@/models/signupModel";

connectDB();

export const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            console.log("BODY", req.body)
            const { email, password, repeat_password, first_name, last_name, phone, company } = req.body;

            if (email && password && repeat_password && first_name && last_name && phone && company) {
                return res.status(200).json({ status: 'success', message: 'Sing up successfull' })
            } else {
                return res.status(500).json({ status: 'failed', message: 'please enter correct value' })
            }
        } catch (e) {
            return res.status(500).json({ status: 'failed', message: 'Something went wrong' })
        }

    }

}

export default handler