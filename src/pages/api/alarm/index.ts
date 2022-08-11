import { NextApiRequest } from "next";
import { NextApiResponseWithLocals } from "../../../types/types";
import {createRouter} from "next-connect";
import loginStatus from "../../../middleware/loginStatus";
import extractJWT from "../../../middleware/extractJWT";
import { myAlarm } from "../../../controller/alarm.controller";

const router = createRouter<NextApiRequest, NextApiResponseWithLocals>()
router.use(extractJWT).use(loginStatus(true)).get(myAlarm);

export default router.handler();