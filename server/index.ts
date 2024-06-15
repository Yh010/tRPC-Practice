import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from "zod";
 
const todoInput = z.object({
    title: z.string(),
    description: z.string()

})
const appRouter = router({
    // ...
    createTodo: publicProcedure
        .input(todoInput)
        .mutation(async (opts) => {
        const title = opts.input.title;  
        const description = opts.input.description;
        return {id:"1"}
    })

});
const server = createHTTPServer({
  router: appRouter,
});
 

export type AppRouter = typeof appRouter;