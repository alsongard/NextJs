import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET()
{
    return NextResponse.json({message: "Hello World"});
}
