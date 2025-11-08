import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Login with Your Email',
          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "youremail@gmail.com" },
            password: { label: "Password", type: "password" },
            admin: {label: "admin password"}
          },
          
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;
            // make db req
            const user = {name: "mohit", id: "1", username: "mohit@gmail.com"}
        
            if (user) {
              return user
            }
            return null
          }
        }),


        GoogleProvider({
            clientId: "process.env.GOOGLE_CLIENT_ID",
            clientSecret: "process.env.GOOGLE_CLIENT_SECRET"
        })        
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }