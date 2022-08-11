import { NextApiRequest } from "next"
import { NextApiResponseWithLocals } from "../types/types";

export default function loginStatus (allowIfLoggedIn : boolean) {
    const error = `${allowIfLoggedIn ? "not" : ""}loggedIn`;
    const errorMessage = `You're ${allowIfLoggedIn ? "not" : "already"} logged in!`
    return async (req : NextApiRequest, res : NextApiResponseWithLocals, next : any) => {
        if (allowIfLoggedIn ? res.locals.user === undefined : res.locals.user !== undefined ) {
            return res.status(401).send({error, message : errorMessage})
        }
        return next();
    }
}