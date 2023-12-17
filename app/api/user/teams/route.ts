// pages/api/user/challenges.ts
import { prisma } from "@/app/_utils/prisma";
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    // Fetch all challenge entries from the database
    const allTeams = await prisma.team.findMany(); // Use uppercase "Challenge"
    
    // Return the challenge entries in the response
    return NextResponse.json(allTeams, {
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
