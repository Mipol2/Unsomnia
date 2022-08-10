import axios from "axios";
import { apiOPTIONS } from "../config/configTechnical";
import { Alarm, UserLogin, UserOpaque, UserRegister } from "../types/types";

export async function getMe () {
    const serverResponse = await axios.get("/api/user/me", apiOPTIONS);

    if (serverResponse.data.error !== undefined) {
        return undefined;
    }
    return serverResponse.data.response as UserOpaque;
}

export async function login (loginData : UserLogin) {
    const serverResponse = await axios.post("/api/user/login", loginData, apiOPTIONS);
    
    if (serverResponse.data.error !== undefined) {
        return {error : serverResponse.data.error, isError : true}
    }

    return {error : null, isError : false};
}

export async function register (registerData : UserRegister) {
    const serverResponse = await axios.post("/api/user/register", registerData, apiOPTIONS);
    
    if (serverResponse.data.error !== undefined) {
        return {error : serverResponse.data.error, isError : true}
    }

    return {error : null, isError : false};
}

export async function getMyAlarm () {
    const serverResponse = await axios.get("/api/alarm", apiOPTIONS);
    console.log(serverResponse);

    return serverResponse.data.response;
}

export async function logout () {
    const serverResponse = await axios.post("/api/user/logout", {}, apiOPTIONS);

    return serverResponse.data.response

}

export async function addAlarm (alarmToAdd : Alarm) {
    const serverResponse = await axios.post("/api/alarm/create", alarmToAdd, apiOPTIONS);

    return serverResponse.data.response;

}