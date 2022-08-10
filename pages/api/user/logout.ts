import { NextApiRequest } from "next";
import { NextApiResponseWithLocals } from "../../../types/types";
import {createRouter} from "next-connect";
import { logout } from "../../../controller/user.controller";
import loginStatus from "../../../middleware/loginStatus";
import extractJWT from "../../../middleware/extractJWT";

const router = createRouter<NextApiRequest, NextApiResponseWithLocals>()
router.use(extractJWT).use(loginStatus(true)).post(logout);

export default router.handler();
