import { NextResponse } from "next/server";

import pool from "@/lib/db";

export async function GET()
{
    try
    {
        const client = await pool.connect();
        // console.log(`client`);
        // console.log(client);
        const results = await client.query("SELECT * FROM person");
        console.log(`result`);
        console.log(results.rows);
        client.release();
        return NextResponse.json({success:true, msg:"Testing on Connection to PostgreSQL:pg", data:results.rows}, {status: 200});

    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return NextResponse.json({success:true, msg:`Error: ${err}`}, {status:500});
    }
}
