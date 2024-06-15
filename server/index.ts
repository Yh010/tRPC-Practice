import { publicProcedure, router } from './trpc';

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
 

export type AppRouter = typeof appRouter;