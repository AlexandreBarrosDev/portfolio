import { play } from "@/fonts";
import { skillItems } from "@/constants";
import MenuSkills from "@/components/MenuSkills";

export default function Skills() {
  return (
    <section className="flex flex-col justify-center items-center lg:w-4/5 h-full my-16 lg:m-auto lg:pl-36">
      <h2 className={`${play.className} text-2xl border-b-2 mb-12 lg:m-12`}>Habilidades</h2>
        <ul className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-3">
          {
            skillItems.map((item, index) => (
              <MenuSkills
                key={index}
                imgURL={item.imgURL}
                imgSize={50}
                label={item.label}
              />
            ))
          }
        </ul>
    </section>
  );
}
