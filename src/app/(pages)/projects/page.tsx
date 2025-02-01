import { Card } from "@/components/Card";
import { projectItems } from "@/constants";
import { play } from "@/fonts";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center lg:w-4/5 h-full my-16 lg:m-auto lg:pl-36">
          <h2 className={`${play.className} text-2xl border-b-2 mb-12 lg:m-12`}>Projetos</h2>
          <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
            {
              projectItems.map((item, index) => (
                <Card
                  key={index}
                  imgURL={item.imgURL}
                  imgSize={100}
                  url={item.url}
                  label={item.label}
                  description={item.description}
                />
              ))
            }
          </div>
        </section>
  );
}
