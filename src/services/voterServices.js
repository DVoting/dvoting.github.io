import axios from "axios";
import { BASE_URL } from "../constants";

export async function getVoterById(_id) {
	try {
		const {data} = await axios.get(`${BASE_URL}/voters/${_id}`)
		console.log(data)
		return data
	} catch (e) {
		console.log(e)
		return null
	}
}

