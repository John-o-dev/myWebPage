import { getLanguagesUrl } from "./getLanguagesUrl";

type LangStats = Record<string, number>;

export async function responseLinguist(url: string) {
  try {
    const response = await fetch(url);
    const data: LangStats = await response.json();
    return getLanguagesUrl(data); // retorna o array processado
  } catch (error) {
    console.error(error);
    return [];
  }
}