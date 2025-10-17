import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

// export async function GET()
// {
    
//     try
//     {
//         const invoices = await pool.query('SELECT * FROM invoices');
//         console.log('these are invoices');
//         console.log(invoices);

//         return NextResponse.json({success:true, data:invoices.rows}, {status:200});
//     }
//     catch(err)
//     {
//         console.log(`Error: ${err}`);
//         NextResponse.json({success:false, msg:"Not learning on invoices"});
//     }
// }

// working with pool.query()
// the rows in the above result is a array

export async function GET()
{
    
    try
    {
        const invoices = await pool.query(`
			SELECT
				invoices.id,
				invoices.amount,
				invoices.date,
				invoices.status,
				customers.name,
				customers.email,
				customers.image_url
			FROM invoices
			JOIN customers ON invoices.customer_id = customers.id
			WHERE
				customers.name ILIKE '%' || $1 || '%' OR
				customers.email ILIKE '%' || $1 || '%' OR
				invoices.amount::text ILIKE '%' || $1 || '%' OR
				invoices.date::text ILIKE '%' || $1 || '%' OR
				invoices.status ILIKE '%' || $1 || '%'
			ORDER BY invoices.date DESC
			LIMIT $2 OFFSET $3
		`,
		["Lee", 10, 5]);
		console.log("invoices");
		console.log(invoices);
        return NextResponse.json({success:true, fields:invoices.fields,  msg:"trial"})

    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return NextResponse.json({success:false, msg:"Not learning on invoices"});
    }
}