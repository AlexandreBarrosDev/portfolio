import { play } from "@/fonts";
import SocialMenu from "@/components/Socialmenu";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center lg:w-4/5 h-full my-16 lg:m-auto lg:pl-36">
      <h2 className={`${play.className} text-2xl border-b-2 mb-12 lg:m-12`}>Contato</h2>
          <SocialMenu />
        </section>
  );
}
