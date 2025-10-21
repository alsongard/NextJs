// for using bcrypt for encypting passwords
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {z} from 'zod';
import bcrypt from 'bcrypt';
import type { User } from "./app/lib/definitions";
import pool from "./app/lib/db";

export const {signIn, signOut, auth} = NextAuth({...authConfig,
    providers: [Credentials({
        async authorize(credentials)
        {
            const parsedCredentials = z
                .object({email:z.string().email(), password:z.string().min(6)})
                .safeParse(credentials)
            if (parsedCredentials.success)
            {
                const {email, password} = parsedCredentials.data;
                const user = await getUser(email);
                // console.log('parsing Success') // testing:working
                // console.log(`user from getUser : ${typeof(user)}`); // testing:working
                // console.log(user); // testing:working
                if (!user)
                {
                    console.log('user not found!')
                    return null;
                }
                // after finding the user we compare
                const result = bcrypt.compare(password, user.password);
                if (!result)
                {
                    throw new Error('Invalid Credentials. Password mismatch')
                }
                return user;
            }
        }
    })]
});



async function getUser(email:string) //: Promise<User | undefined>
{
    console.log(`getUser: ${email}`)
    try
    {
        const user = await pool.query(`SELECT * FROM users WHERE email = $1;`, [email]);
        // const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
        // console.log(`user authenticate`); // testing:working
        // console.log(user); // testing:working
        // console.log('user.rows'); // testing:working 
        // console.log(user.rows[0]); // testing:working
        return user.rows[0];
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        throw new Error(`Error: ${err}`);
    }
}