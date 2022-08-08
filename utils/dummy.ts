import { Alarm } from "../types/types";

const alarmList = [
    {
        id : 1,
        title : "Prepare for work",
        description : "Make breakfast and get ready!",
        urgency : "high",
        hour : 5,
        minute : 30
    },
    {
        id : 2,
        title : "Wake up from nap",
        description : "Get back to work!",
        urgency : "med",
        hour : 13,
        minute : 45
    },
    {
        id : 3,
        title : "Coffee break",
        description : "Buy starbucks",
        urgency : "low",
        hour : 16,
        minute : 20
    }

] as Alarm[];

export default alarmList;