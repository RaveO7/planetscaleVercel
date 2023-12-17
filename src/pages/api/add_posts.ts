import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const updateUser = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: 'luc'
        }
    });
    res.status(200).send('change')
}