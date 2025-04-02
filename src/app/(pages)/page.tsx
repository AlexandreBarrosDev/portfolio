import { raleway } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center lg:ml-48 h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <Image src={'/alx-logo.svg'} width={100} height={100} alt="Alexandre Barros Logo" />
        <h2 className={`${raleway.className} antialiased font-extralight text-start
        pt-2 border-t-2 lg:pl-2 lg:border-t-0 lg:border-l-2 border-neutral-900 border-solid`}>
          <span className="text-sm lg:text-2xl pl-1 lg:pl-2">Bem vindo ao meu</span><br />
          <span className="text-6xl lg:text-9xl tracking-wide">PORTFOLIO</span><br />
          <span className="text-2xl lg:text-5xl pl-1 lg:pl-2">Desenvolvedor Web</span>
        </h2>
      </div>
    </section>
  );
}
