import { raleway } from "@/fonts";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col justify-start items-center lg:w-4/5 h-screen my-16 lg:m-auto lg:pl-36">
      <h2 className={`${raleway.className} text-2xl font-bold mb-12 lg:m-12`}>Sobre</h2>
      <div className="flex flex-col justify-center items-center gap-12 p-4">
        <div className="p-2">
          <Image
            className="rounded-full border-4 border-zinc-800 "
            src="/fotoalxperfil.png"
            width={250}
            height={250}
            alt="Foto de Alexandre Barros" />
        </div>
        <div className="flex flex-col gap-4 text-justify p-4">
          <p>
            Analista de Sistemas focado em Desenvolvimento Web. Apaixonado por aprender
            novas habilidades e resolver problemas complexos através de soluções tecnológicas.
            Busco sempre aprimorar minhas habilidades para entregar produtos de alta qualidade.
          </p>
          <p>
            Sou um entusiasta por novas tecnologias e busco constantemente aprimorar minhas habilidades para entregar
            projetos de alta qualidade. Acredito que a colaboração e a comunicação são fundamentais para o sucesso.
          </p>
          <p>
            Nos momentos de lazer, sou um ávido jogador de games clássicos e explorador de novos lugares.
            Essa paixão por novas experiências me inspira a trazer criatividade e originalidade para meus projetos.
          </p>
          <p className="text-xs text-end mt-4"><cite>"Menos é mais. Ser simples requer tempo e esforço"</cite>
          - Jeff Bullas</p>
        </div>
      </div>
    </section>
  );
}
