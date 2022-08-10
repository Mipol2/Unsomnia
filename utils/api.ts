import axios from "axios";
import { apiOPTIONS } from "../config/configTechnical";
import { UserOpaque } from "../types/types";

export async function getMe () {
    const serverResponse = await axios.get("/api/user/me", apiOPTIONS);

    if (serverResponse.data.error !== undefined) {
        return undefined;
    }
    return serverResponse.data.response as UserOpaque;
}