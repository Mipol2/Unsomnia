import { NextApiRequest, NextApiResponse } from "next";
import {deleteCookie} from "cookies-next"
import checkIfLoggedIn from "../../../utils/checkIfLoggedIn";
import serverConfig from "../../../config";

export default async function handler (req : NextApiRequest, res : NextApiResponse) {
    if (!await checkIfLoggedIn(req)) {
        res.status(401).send({error : "notLoggedIn", message : "You're not logged in!"})
    }

    deleteCookie("token", serverConfig.cookieSettings);
    

    return res.status(200).send({message : "Logout succesful"})
}