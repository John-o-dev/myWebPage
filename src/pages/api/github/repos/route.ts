/*
As rotas /api/github/user e /api/github/repos continuam úteis apenas se algum componente no client precisar refazer essas chamadas depois (ex: botão de refresh). Se não for o caso, você nem precisa mantê-las.
*/
import { NextResponse } from "next/server";

type typeProps = {
  page: number;
  per_page: number;
}

export async function GET({page, per_page}: typeProps) {
  const res = await fetch(`https://api.github.com/users/John-o-dev/starred?per_page=${per_page}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // cache 1h no servidor
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Erro ao buscar usuário" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}