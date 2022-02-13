import axios from "axios";
import { BASE_URL } from "../constants";

export const sendOTP = async (email) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.put(`${BASE_URL}/otp`, email, config);
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

export const updatePasword = async (emailAndPassword) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.put(`${BASE_URL}/users/profile`, emailAndPassword, config);
        return res.data;
    } catch (error) {
        throw error;
    }
};