import { NextApiResponse } from "next";
import type { UserOpaque } from "../types/types"
import serverConfig from "../config";
import jwt from 'jsonwebtoken'

function createJWT (user : UserOpaque) {
    const {keyGeneratingJWT, issuer, expireTime} = serverConfig.jwt;
    const expires = new Date(Date.now() + expireTime)
    try {
        const token = jwt.sign(user, keyGeneratingJWT, {
            algorithm : "HS256",
            expiresIn : "1d", issuer
        })
        return {error : null, response : token}
    }
    catch (error) {
        return {error, response : undefined}
    }
}

export default createJWT;