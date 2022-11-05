import Image from "next/image";

export default function AppBox(props) {
  return (
    <div className="items-center space-x-4 rounded-xl bg-white p-2 shadow-md dark:bg-gray-700">
      <div className="flex items-center space-x-4">
        <div className="">
          <Image
            layout="fixed"
            width={119}
            height={100}
            src={props.image}
          ></Image>
        </div>
        <div className="flex flex-col justify-evenly space-y-2">
          <h3 className="text-3xl">{props.title}</h3>
          <p className="hidden font-body text-lg md:block">
            {props.description}
          </p>
        </div>
      </div>
      <p className="font-body text-lg md:hidden">{props.description}</p>
    </div>
  );
}
