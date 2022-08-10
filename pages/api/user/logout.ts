import { NextApiRequest } from "next";
import { createRouter } from "next-connect";
import { logout } from "../../../controller/user.controller";
import extractJWT from "../../../middleware/extractJWT";
import loginStatus from "../../../middleware/loginStatus";
import { NextApiResponseWithLocals } from "../../../types/types";

const router = createRouter<NextApiRequest, NextApiResponseWithLocals>();

router.use(extractJWT).use(loginStatus(true)).post(logout);

export default router.handler();