import { iconsTechMap } from "@/src/lib/iconsTechDictionary";
import { LuBadgeAlert } from "react-icons/lu";

export function getTechIcon(name: string) {
  const key = name.toLowerCase().trim();

  return {
    Icon: iconsTechMap[key] ?? LuBadgeAlert,
    found: !!iconsTechMap[key],
  };
}