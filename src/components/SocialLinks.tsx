import Link from "next/link";
import Image from "next/image";
import { SocialLinkInterface } from "@/interfaces";

export default function SocialLinks(props: SocialLinkInterface) {
  return (
    <li className="flex text-sm md:text-lg">
      <Link className="flex justify-center items-center" href={props.url} >
      <Image className="mr-2" src={props.imgURL} width={50} height={50} alt={props.label} />
      {props.label}
      <Image src={'/right-arrow-alt.svg'} width={30} height={30} alt="seta de link"/>
      </Link>
    </li>
  )
}
