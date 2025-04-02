import { raleway } from "@/fonts";
import { MenuSkillInterface } from "@/interfaces";
import Image from "next/image";

export default function MenuSkills(props: MenuSkillInterface) {
  return (
    <li className={`${raleway.className} antialiased flex gap-2 flex-col w-40 p-4
    justify-start items-center list-none`}>
      <Image src={props.imgURL} width={props.imgSize} height={props.imgSize} alt={props.label} />
      <span className="p-1 text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
        {props.label}
      </span>
    </li>
  )
}
