import { Card } from "@/components/Card";
import { projectItems } from "@/constants";
import { raleway } from "@/fonts";

export default function Projects() {
  return (
    <section className="flex flex-col justify-start items-center lg:w-4/5 h-screen my-16 lg:m-auto lg:pl-36">
          <h2 className={`${raleway.className} text-2xl font-bold mb-12 lg:m-12`}>Projetos</h2>
          <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
            {
              projectItems.map((item, index) => (
                <Card
                  key={index}
                  imgURL={item.imgURL}
                  imgSize={30}
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
