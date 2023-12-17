import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const posts = await prisma.post.findMany({
        // where: {
        //     AND: [
        //         {
        //             content: {
        //                 contains: "pla"
        //             }
        //         },
        //         {
        //             OR: [
        //                 {
        //                     title: {
        //                         contains: "t"
        //                     }
        //                 },
        //                 {
        //                     title: {
        //                         contains: "?"
        //                     }
        //                 }
        //             ]
        //         }

        //     ]
        // },
        orderBy: {
            id: 'desc'
        }
    });

    // const posts = await prisma.post.create({
    //     data: {
    //         title: "planet",
    //         content: "planet",
    //         authorId: 1
    //     }
    // })

    res.json(posts)
}