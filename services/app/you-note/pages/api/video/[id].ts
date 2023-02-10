// pages/api/post/[id].ts

import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req, res) {
  const videoId = req.query.id;
  if (req.method === 'DELETE') {
    const video = await prisma.video.delete({
      where: { id: videoId },
    });
    res.json(video);
  }
  if (req.method === 'POST' && videoId === 0) {
    const video = await prisma.video.findFirst({
      where: { id: videoId },
    });
    res.json(video);
  }
  if (req.method === 'GET') {
    const post = await prisma.video.findFirst({
      where: { id: videoId },
    });
    res.json(post);
  }

  else {
    throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
