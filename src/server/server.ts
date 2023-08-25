import z from "zod";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../db/repositories/user.repository";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    return await getUsers();
  }),
  createUser: publicProcedure
    .input(z.object({ username: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      const user = await createUser(input.username);
      return user;
    }),
  deleteUser: publicProcedure.input(z.number()).mutation(async (opts) => {
    const { input } = opts;
    return await deleteUser(input);
  }),
});

export type AppRouter = typeof appRouter;
