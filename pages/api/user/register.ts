import prisma from "../../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import {setCookie} from "cookies-next"
import createJWT from "../../../utils/createJWT";
import { UserOpaque } from "../../../types/types";
import serverConfig from "../../../config";
import bcrypt from 'bcrypt';
import checkIfLoggedIn from "../../../utils/checkIfLoggedIn";

export default async function handler (req : NextApiRequest, res : NextApiResponse) {
    if (await checkIfLoggedIn(req)) {
        res.status(401).send({error : "loggedIn", message : "You're already logged in!"})
    }
    const {username, email, password} = req.body;

    const getUser = await prisma.user.findMany({
        where : {
            username : username
        }
    })

    if (getUser.length !== 0) {
        return res.status(400).send({message : "User already exists!"})
    }

    await prisma.user.create({
        data : {
            username,
            email,
            password : await bcrypt.hash(password, 10)
        }
    })

    setCookie("token" ,createJWT( {username, email} as UserOpaque), serverConfig.cookieSettings)

    return res.status(200).send({message : "Register succesful"})
}