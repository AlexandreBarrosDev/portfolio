import { ButtonInterface } from "@/interfaces";
import Image from "next/image";

export default function Button(props: ButtonInterface) {
  return (
    <button type={props.type}
            onClick={props.onClick}
            className="flex px-4 py-2 my-2 font-bold text-sm rounded-lg
            bg-red-600
            text-zinc-800 hover:bg-red-500"
            >
              {props.label}
    </button>
  );
}
