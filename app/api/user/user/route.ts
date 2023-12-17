// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const { name, email } = req.body;
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      res.status(201).json({ user: newUser });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
