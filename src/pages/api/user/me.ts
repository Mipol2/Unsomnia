import { NextApiRequest } from "next";
import { createRouter } from "next-connect";
import { myInfo } from "../../../controller/user.controller";
import extractJWT from "../../../middleware/extractJWT";
import loginStatus from "../../../middleware/loginStatus";
import { NextApiResponseWithLocals } from "../../../types/types";

const router = createRouter<NextApiRequest, NextApiResponseWithLocals>()

router.use(extractJWT).use(loginStatus(true)).get(myInfo)

export default router.handler();