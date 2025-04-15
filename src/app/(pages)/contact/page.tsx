import { raleway } from "@/fonts";
import SocialMenu from "@/components/Socialmenu";

export default function Contact() {
  return (
    <section className="flex flex-col justify-start items-center lg:w-4/5 h-screen my-16 lg:m-auto lg:pl-36">
      <h2 className={`${raleway.className} text-2xl font-bold mb-12 lg:m-12`}>Contato</h2>
          <SocialMenu />
        </section>
  );
}
