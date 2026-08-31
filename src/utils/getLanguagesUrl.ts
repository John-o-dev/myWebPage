import langColors from "@/src/lib/language-colors.json"
import { LanguageMeta } from "../types/repos";
import { getTechIcon } from "../components/DegreesGallery/DetailCard/GetTechIcon";

type LangStats = Record<string, number>;

export function getLanguagesUrl(data: LangStats): LanguageMeta[] {
  const total = Object.values(data).reduce((sum, b) => sum + b, 0);

  return Object.entries(data)
    .map(([name, bytes]) => {
      const percent = total > 0 ? (bytes / total) * 100 : 0;
      const color = langColors[name] || "#cccccc";
      // const icon = langIcons[name] || null;
      const { Icon, found } = getTechIcon(name);
      return { name, bytes, percent: +percent.toFixed(0), color, Icon };
    })
    .sort((a, b) => b.percent - a.percent);
}
