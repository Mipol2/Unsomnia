import prisma from "../utils/prisma";
import { NextApiRequest } from "next";
import {deleteCookie, setCookie} from "cookies-next"
import createJWT from "../utils/createJWT";
import { NextApiResponseWithLocals, UserOpaque } from "../types/types";
import bcrypt from 'bcrypt';

export async function login (req : NextApiRequest, res : NextApiResponseWithLocals) {

    const {username, password} = req.body;

    if ([username, password].some(value => value === undefined)) {
        return res.status(400).send({error : "incompleteData", message : "Data is not complete"})
    }

    const users = await prisma.user.findMany({
        where : {
            username : username
        }
    })

    if (users.length === 0) {
        return res.status(400).send({error : "noUser", message : "User doesn't exist"})
    }

    const userFound = users[0];

    if (!(await bcrypt.compare(password, userFound.password))) {
        return res.status(400).send({error :"invalidPassword", message : "Wrong password"})
    }

    const {error, response : jwt} = createJWT( {username, email : userFound.email} as UserOpaque)

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

    const {error, response : jwt} = createJWT( {username, email} as UserOpaque)

    if (error !== null) {
        return res.status(500).send({error, message : "Error making JWT"})
    }

    setCookie("token" ,createJWT( {username, email} as UserOpaque)["response"], {req, res})

    return res.status(200).send({message : "Register succesful"})
}

export async function logout (req : NextApiRequest, res : NextApiResponseWithLocals) {
    deleteCookie("token", {req, res});
    return res.status(200).send({message : "Logout succesful"});
}