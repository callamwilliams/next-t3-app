import type { NextApiRequest, NextApiResponse } from 'next';

export default function signout(req: NextApiRequest, res: NextApiResponse) {
  res.redirect('/api/auth/signout');
}
