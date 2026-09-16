/*
As rotas /api/github/user e /api/github/repos continuam úteis apenas se algum componente no client precisar refazer essas chamadas depois (ex: botão de refresh). Se não for o caso, você nem precisa mantê-las.
*/

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`https://api.github.com/users/John-o-dev`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao buscar usuário" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
}