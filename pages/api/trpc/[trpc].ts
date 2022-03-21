import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter, AppRouter } from "../../../server";
import { inferProcedureOutput } from "@trpc/server";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
