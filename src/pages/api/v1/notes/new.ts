import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { prisma } from '~/utils/prisma';
import { authOptions } from '../../auth/authOptions';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const session = await getServerSession(req, res, authOptions);

		const user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email!,
			},
		});

		if (user) {
			await prisma.note.create({
				data: {
					text: req.body.text,
					title: req.body.title,
					userId: user.id,
				},
			});

			return res.status(201).end();
		}
	} catch (error) {
		console.log(error);
		return res.status(401).end();
	}
}
