import { CookieSerializeOptions } from "next/dist/server/web/types";

const serverConfig = {
    jwt : {
        keyGeneratingJWT : process.env.KEYJWT as string,
        issuer : process.env.ISSUER as string,
        expireTime : process.env.EXPIRE_TIME as string

    },
    cookieSettings : {
        httpOnly : true, secure : (process.env.production as string === "true"), sameSite : "none"
    } as CookieSerializeOptions
}

export default serverConfig;