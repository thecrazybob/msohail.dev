import Link from "next/link";
import Image from "next/image";

export default function Project(props) {
  return (
    <div
      className={`${
        props.featured === true
          ? "border-b-2 border-black dark:border-white"
          : ""
      } grid grid-cols-1 gap-16 pb-20 lg:grid-cols-2 ${
        props.removePadding ? "" : "pt-20"
      }`}
    >
      <div className="flex flex-col space-y-5 dark:text-gray-300">
        {props.featured === true ? (
          <h2 className="mb-5 text-4xl">Featured Project</h2>
        ) : (
          ""
        )}

        <span className="text-xl font-medium">{props.title}</span>

        <p className="w-full text-xl md:w-2/3">{props.description}</p>

        <span className="max-w-max border-b border-gray-400 text-gray-800 dark:text-gray-300">
          Tech used:
        </span>

        <div className="flex flex-wrap gap-4">
          {Array.isArray(props.tech)
            ? props.tech.map((icon, index) => (
                <div
                  key={index}
                  className="flex w-14 items-center justify-center rounded-full bg-white p-4 drop-shadow-md"
                >
                  <Image alt="Technology icon" src={icon}></Image>
                </div>
              ))
            : props.tech}
        </div>

        <span className="max-w-max border-b border-gray-400 text-gray-800 dark:text-gray-300">
          Timeframe:
        </span>

        <span>{props.timeframe}</span>

        {props.linkLabel ? (
          <span className="max-w-max border-b border-black pt-6 font-medium tracking-wide dark:border-white">
            <Link href={props.featured ? "/work" : props.linkUrl}>
              <a rel="nofollow">
                {props.featured ? "View of all my work" : props.linkLabel} ↗
              </a>
            </Link>
          </span>
        ) : (
          ""
        )}
      </div>

      <div
        className="h-96 justify-center rounded-xl border-4 border-black bg-white dark:border-white"
        style={{ position: "relative" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="w-4/6">
            <Image alt={props.title + " Logo"} src={props.image}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
