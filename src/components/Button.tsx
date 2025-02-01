import { ButtonInterface } from "@/interfaces";
import Image from "next/image";

export default function Button(props: ButtonInterface) {
  return (
    <button type={props.type}
            onClick={props.onClick}
            className="flex px-4 py-2 my-2 font-bold text-sm rounded-lg
            bg-gradient-to-r from-emerald-500 to-cyan-500
            text-neutral-100 hover:bg-gradient-to-r hover:from-emerald-600
            hover:to-cyan-600"
            >
              {props.label}
    </button>
  );
}
