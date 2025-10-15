import { NextResponse } from "next/server";
export async function GET()
{
    return NextResponse.json({success:true, msg:"Ryan Oakes, Heathens: Twenty One Pilots"}, {status:200});
}