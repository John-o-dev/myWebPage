import { iconsTechMap } from "@/src/lib/iconsTechDictionary";
import { LuBadgeAlert } from "react-icons/lu";

// export function getTechIcon(name: string) {
//   const key = name.toLowerCase().trim();

//   if (iconsTechMap[key]) {
//     return iconsTechMap[key];
//   }

//   // eslint-disable-next-line react/display-name
//   return (props: React.ComponentProps<typeof LuBadgeAlert>) => (
//     <LuBadgeAlert {...props} color="#000000" />
//   );
// }

export function getTechIcon(name: string) {
  const key = name.toLowerCase().trim();

  return {
    Icon: iconsTechMap[key] ?? LuBadgeAlert,
    found: !!iconsTechMap[key],
  };
}