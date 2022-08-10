import prisma from "../utils/prisma";
import { NextApiRequest } from "next";
import {deleteCookie, setCookie} from "cookies-next"
import createJWT from "../utils/createJWT";
import { NextApiResponseWithLocals, User } from "../types/types";
import bcrypt from 'bcrypt';

export async function login (req : NextApiRequest, res : NextApiResponseWithLocals) {

    const {username, password} = req.body;

    if ([username, password].some(value => value === undefined)) {
        return res.status(400).send({error : "incompleteData", message : "Data is not complete"})
    }

    const user = await prisma.user.findFirst({
        where : {
            username : username
        }
    })

    if (user === null) {
        return res.status(400).send({error : "noUser", message : "User doesn't exist"})
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({error :"invalidPassword", message : "Wrong password"})
    }

    const {error, response : jwt} = createJWT(user as User)

    if (error !== null) {
        return res.status(500).send({error, message : "Error making JWT"})
    }

    setCookie("token", jwt, {req, res})

    return res.status(200).send({message : "Login succesful"})
}

export async function register (req : NextApiRequest, res : NextApiResponseWithLocals) {
    const {username, email, password} = req.body;

    if ([username, password, email].some(value => value === undefined)) {
        return res.status(400).send({error : "incompleteData", message : "Data is not complete"})
    }

    const existingUser = await prisma.user.findFirst({
        where : {
            username
        }
    })

    if (existingUser !== null && existingUser !== undefined) {
        return res.status(400).send({message : "User already exists!"})
    }

    const user = await prisma.user.create({
        data : {
            username,
            email,
            password : await bcrypt.hash(password, 10)
        }
    })

    const {error, response : jwt} = createJWT(user as User)

    if (error !== null) {
        return res.status(500).send({error, message : "Error making JWT"})
    }

    setCookie("token", jwt, {req, res})

    return res.status(200).send({message : "Register succesful"})
}

export async function logout (req : NextApiRequest, res : NextApiResponseWithLocals) {
    deleteCookie("token", {req, res});
    return res.status(200).send({message : "Logout succesful"});
}