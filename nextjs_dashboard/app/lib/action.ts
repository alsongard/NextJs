'use server';
import {string, z} from 'zod';
import pool from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const formSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    date: z.string(),
    status: z.enum(["pending", "paid"])
})
const createInvoice = formSchema.omit({id:true, date:true});

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};


export default  async function CreateInvoice(formData:FormData, state:State)
{
    try
    {
        const validatedFields =  createInvoice.safeParse({ //changing from:createINvoice.parse to safeParse || rawFormData to validationError
                customerId: formData.get('customerId'), // check this on form:label:select:value=customer.id::select:namecustomerId
                status: formData.get("status"),
                amount: formData.get("amount"),
            })

        if (!validatedFields.success)
        {
            return {
                errors:validatedFields.error.flatten().fieldErrors,
                message:'Missing Fields. Failed to create Invoice'
            }
        }
         // Prepare data for insertion into the database
        const { customerId, amount, status } = validatedFields.data;
        const amountInCents = amount * 100;
        // it is recommended to set amount in cents
        // to create Date we use
        const date = new Date().toISOString().split("T")[0]; // gets the first part of the array [ '2025-10-17', '17:13:49.697Z' ]
        
        const results = await pool.query(`
            INSERT INTO invoices(customer_id, amount, status, date)
            VALUES ($1,$2, $3, $4);
            `, [customerId, amount, status, date]);

        console.log(`result`);
        console.log(results);

    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return {message:"Database Error: Failed to create Invoice!"}
    }
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");

}

const updateSchema = z.object({
    id:z.string(), 
    amount:z.coerce.number(),
    status:z.enum(["pending", "paid"]),
    date:z.string(),
    customerId:z.string()
})
const UpdateInvoice = updateSchema.omit({id:true,date:true});
export async function updateInvoiceAction(id:string, formData:FormData)
{
    try
    {
        const rawFormData = UpdateInvoice.parse({
            amount:formData.get("amount"),
            status: formData.get("status"),
            customerId: formData.get("customerId"),
        });

        console.log(`id: ${id}`);
        console.log(`amount: ${rawFormData.amount}`);
        const date = new Date().toISOString().split("T")[0]; 

        const result = await pool.query(`
            UPDATE invoices
            SET customer_id = $1, amount=$2, status=$3
            WHERE id = $4;
            `,[rawFormData.customerId, rawFormData.amount, rawFormData.status,  id]);

        console.log("update result");
        console.log(result);
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
    }
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}


export async function deleteInvoiceAction(id:string)
{
    try
    {
        const result = await pool.query(`
            DELETE FROM invoices WHERE id=$1;`,
        [id]);
        console.log(`delete result`);
        console.log(result);
    
        if (result.rowCount == 1)
        {
            console.log('Deletion operation success');
            revalidatePath("/dashboard/navigate"); // using only these as we are interacting with the single page only
        }

    }
    catch(err)
    {
        console.log(`Error: ${err}`);
    }

}


// FIELDS
// customerId
// amount
// status
// the 2 are also required
// date
// id


const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
});

