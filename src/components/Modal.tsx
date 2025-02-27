import { ModalItemInterface } from "@/interfaces";
import Button from "./Button";
import Image from "next/image";

export default function Modal(props: ModalItemInterface) {
  if(!props.isOpen) return null;
  return (
    <div onClick={props.onClose} className={`w-screen h-screen fixed top-0 left-0 flex justify-center
     items-center bg-neutral-950 bg-opacity-60`}>
      <div id={props.items.url} onClick={(e) => e.stopPropagation()} className="w-screen flex flex-col
      justify-around items-center bg-neutral-200 " >
        <div className="flex flex-col justify-center items-center p-4">
          <Image src={props.items.imgURL} alt={props.items.label} width={props.items.imgSize} height={props.items.imgSize}/>
          <h3 className="text-neutral-900 font-bold">{props.items.label}</h3>
        </div>
        <ul className="flex flex-col w-full justify-center items-start p-4 bg-neutral-100 text-neutral-900">
          {
            props.items.description.map((description, index) => (
              <li
                key={index}
                className="justify-center items-center text-sm p-2 text-justify"
              >
                {description}
              </li>
            ))
          }
        </ul>
        <Button type={'button'} onClick={props.onClose} label='X'/>
      </div>
    </div>
  )
}
