import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/server";
import { createContext } from "@/server/createContext";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
