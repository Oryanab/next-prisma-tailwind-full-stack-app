// utils/trpc.ts
import { createReactQueryHooks } from "@trpc/react";
import { appRouter, AppRouter } from "../server";

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
