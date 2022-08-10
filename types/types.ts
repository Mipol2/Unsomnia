import { NextApiRequest, NextApiResponse } from "next";

export const possibleSymbolList = ["star", "square", "circle", "pentagon"] as const;
export type Symbol = typeof possibleSymbolList[number];

export interface ICard {
  symbol: Symbol;
}

export interface ICardWithID extends ICard {
  id: number;
}

const possibleUrgencyList = ["low", "med", "high"] as const;
export type Urgency = typeof possibleUrgencyList[number];

export interface Alarm {
    id : number,
    title : string,
    description : string,
    urgency : Urgency,
    hour : number,
    minute : number
}

export interface UserOpaque {
  user_id : number,
  username : string,
  email : string
}

export interface User extends UserOpaque {
  password : string
}

export interface NextApiResponseWithLocals extends NextApiResponse {
  locals : any
}

export type TokenStatus  = "none" | "invalid" | "valid"
