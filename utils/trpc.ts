// utils/trpc.ts
import { createReactQueryHooks } from "@trpc/react";
import { appRouter } from "../server";

export const trpc = createReactQueryHooks<typeof appRouter>();
// => { useQuery: ..., useMutation: ...}
