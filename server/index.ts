import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from "zod";
 
const todoInput = z.object({
    title: z.string(),
    description: z.string()

})
const appRouter = router({
    createTodo: publicProcedure
        .input(todoInput)
        .mutation(async (opts) => {
        const title = opts.input.title;  
        const description = opts.input.description;
        return {id:"1"}
        }),
    signUpUser: publicProcedure
        .input(z.object({
            email: z.string(),
            password: z.string()
        })).mutation(async (opts) => {
            const email = opts.input.email;
            const password = opts.input.password;

            let token = "12344";
            return {
                token
            }

        }),
    createTodowithUser: publicProcedure
        .input(z.object({
            title: z.string()
        }))
        .mutation(async (opts) => {
            console.log(opts.ctx.username)
        })
});
const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader)
        return ({
            username:"12344"
        })
    }
});
 
server.listen(3000)
export type AppRouter = typeof appRouter;