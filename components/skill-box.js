import Image from "next/image";

export default function SkillBox(props) {
  return (
    <div className="flex items-center divide-x-2 divide-black rounded-xl bg-white p-4 shadow-md filter dark:divide-white dark:bg-gray-700">
      <div className="mx-4 flex items-center justify-center dark:invert">
        <Image width={48} height={48} layout="fixed" src={props.logo}></Image>
      </div>
      <div className="mx-2 flex flex-col space-y-2 px-4">
        <div className="max-w-max border-b border-black font-bold uppercase dark:border-white">
          {props.title}
        </div>
        <div className="font-body">{props.description}</div>
      </div>
    </div>
  );
}
