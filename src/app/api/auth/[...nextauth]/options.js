import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export const options = {

    providers: [
        // GitHubProvider({
        //     profile(profile) {
        //         console.log("Profile Github: ", profile)

        //         let userRole = "GitHub User"
        //         if (profile?.email == "soportemarketingcorporation@gmail.com" || profile?.email == "diegoespinozareyna@gmail.com") {
        //             userRole = "admin"
        //         }

        //         return {
        //             ...profile,
        //             role: userRole
        //         }
        //     },
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        // GoogleProvider({
        //     profile(profile) {
        //         console.log("Profile Google: ", profile)

        //         return {
        //             ...profile,
        //             id: profile.sub,
        //             role: userRole
        //         }
        //     },
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_Secret,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)

                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!userFound) throw new Error('No user found')

                console.log(userFound)

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword) throw new Error('Wrong password')

                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                }
            },
        }),
    ],
    page: {
        signIn: '/auth/login',
        newUser: '/auth/new-account',
    },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) token.role = user.role
    //         return token
    //     },
    //     async session({ session, token }) {
    //         if (session?.user) session.user.role = token.role
    //         return session
    //     }
    // },
    session: {
        // Configura la duración máxima de la sesión en segundos
        maxAge: 24 * 60 * 60, // 24 horas en segundos
    },
}

