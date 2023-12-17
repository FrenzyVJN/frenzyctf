import { prisma } from "@/app/_utils/prisma";
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export async function GET(request: NextRequest) {
  try {
    // Fetch all user entries from the database
    const allUsers = await prisma.challenge.findMany();

    // Return the user entries in the response
    return NextResponse.json((allUsers), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return NextResponse.json(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}