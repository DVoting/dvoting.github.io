import axios from "axios";
import { BASE_URL } from "../constants";

export const sendOTP = async (emailAndPurpose) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.put(`${BASE_URL}/otp`, emailAndPurpose, config);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const verifyOTP = async (emailAndOtp) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.patch(`${BASE_URL}/otp/verify`, emailAndOtp, config);
        return res.data;
    } catch (error) {
        throw error;
    }
};