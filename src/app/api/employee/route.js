import { emp } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = emp;
  return NextResponse.json(data, { status: 200 });
}