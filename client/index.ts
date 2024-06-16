import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
          Authorization: "bearer 123"
        }
      }
    }),
  ],
});

async function main() {
    const response = await trpc.createTodo.mutate({
        title: "do something",
        description: "do something great"
    })    
    
  const signupresponse = await trpc.createTodowithUser.mutate({
    title: "yash@gmail.com",

    })

    console.log(signupresponse)
}

main()

