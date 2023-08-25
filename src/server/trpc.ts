import { initTRPC } from "@trpc/server";
import { Context } from "./createContext";

const trpc = initTRPC.context<Context>().create();

export const router = trpc.router;
export const publicProcedure = trpc.procedure;
