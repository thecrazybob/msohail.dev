import Image from "next/image";
import arrowDown from "../public/arrow-down.svg";

export default function TitleBar(props) {
  return (
    <section className="mb-10 border-b-2 border-b-black pb-16 dark:border-b-white">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-5xl">{props.title}</h2>
        <div className="text-2xl text-gray-800 dark:text-gray-300">
          {props.description}
        </div>
      </div>

      <div className="mt-16 dark:invert">
        <Image src={arrowDown} layout="fixed"></Image>
      </div>
    </section>
  );
}
