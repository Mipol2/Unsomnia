import { getCookie } from "cookies-next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken"
import { TokenStatus } from "../types/types";
import serverConfig from "../config";

export default async function extractJWT (req : NextApiRequest) {
        let tokenStatus = "none" as TokenStatus;
        let fetchedUser = undefined;
        const {jwt : {keyGeneratingJWT}, cookieSettings} = serverConfig;
        let token = req.cookies["token"];
        if (token) {
            token = token as string;
            jwt.verify(token, keyGeneratingJWT, (error, user) => {
                if (!error) {
                    tokenStatus = "valid";
                    fetchedUser = user;
                } else {
                    tokenStatus = "invalid"
                }
            }) 
        } else {
            tokenStatus = "none"
        }
    
        return {tokenStatus, user : fetchedUser};
    }