import { NextApiRequest } from "next"
import extractJWT from "./extractJWT"

export default async function checkIfLoggedIn (req : NextApiRequest) {
    const {tokenStatus} = await extractJWT(req);

    if (tokenStatus !== "none") {
        return false;
    }

    return true;
}