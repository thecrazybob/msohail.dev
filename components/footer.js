import Image from "next/image";
import SpotifyLogo from "../public/spotify.png";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Footer() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <footer className="my-10 border-t-2 border-black pt-10 dark:border-white">
      <div className="mb-20 grid grid-flow-row grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="max-w-max border-b border-black dark:border-white">
              Currently listening to
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src={SpotifyLogo}
                height={32}
                width={107}
                className="dark:invert"
                alt="Spotify Logo"
              ></Image>
              <div>
                {data?.isPlaying ? (
                  <>
                    <a
                      className="font-medium hover:underline"
                      href={data.songUrl}
                    >
                      {data.title}
                    </a>{" "}
                    by {data.artist ?? "Spotify"}
                  </>
                ) : (
                  "Not Playing"
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="max-w-max border-b border-black dark:border-white">
              Follow me on social media
            </div>
            <div className="flex space-x-4 dark:invert">
              <a
                rel="noreferrer"
                aria-label="Twitter"
                href="https://www.twitter.com/itscrazybob"
                target="_blank"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9999 1.91992C11.8242 1.91992 1.91992 11.8242 1.91992 23.9999C1.91992 36.1756 11.8242 46.0799 23.9999 46.0799C36.1756 46.0799 46.0799 36.1756 46.0799 23.9999C46.0799 11.8242 36.1756 1.91992 23.9999 1.91992ZM34.7874 19.703C34.797 19.9295 34.8028 20.1599 34.8028 20.3913C34.8028 27.4166 29.4527 35.5199 19.6713 35.5199C16.6684 35.5199 13.8719 34.6396 11.5199 33.1305C11.9356 33.1804 12.357 33.2044 12.7881 33.2044C15.2802 33.2044 17.5737 32.3558 19.3919 30.9292C17.0649 30.887 15.1026 29.3462 14.4239 27.2361C14.7494 27.2985 15.0825 27.3321 15.4262 27.3321C15.911 27.3321 16.3814 27.2678 16.8258 27.1449C14.3951 26.6543 12.5625 24.5078 12.5625 21.9302C12.5625 21.9071 12.5625 21.885 12.5625 21.863C13.2796 22.2614 14.0985 22.5014 14.9711 22.5292C13.5426 21.574 12.6057 19.9478 12.6057 18.1026C12.6057 17.1282 12.8668 16.2153 13.3247 15.4281C15.9484 18.645 19.8671 20.7618 24.286 20.9846C24.1948 20.5948 24.1468 20.1897 24.1468 19.773C24.1468 16.8364 26.5276 14.4556 29.4652 14.4556C30.9945 14.4556 32.3759 15.1007 33.3455 16.1346C34.5561 15.8966 35.6956 15.454 36.7228 14.8454C36.3263 16.0857 35.4825 17.1282 34.3833 17.7868C35.4604 17.6562 36.4838 17.3721 37.439 16.9487C36.7266 18.0153 35.8252 18.9532 34.7874 19.703Z"
                    fill="black"
                  />
                </svg>
              </a>

              <a
                rel="noreferrer"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mohammedcodes/"
                target="_blank"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9999 1.91992C11.8252 1.91992 1.91992 11.8242 1.91992 23.9999C1.91992 36.1756 11.8252 46.0799 23.9999 46.0799C36.1746 46.0799 46.0799 36.1756 46.0799 23.9999C46.0799 11.8242 36.1746 1.91992 23.9999 1.91992ZM17.2799 33.5999H13.4399V19.1999H17.2799V33.5999ZM15.3599 16.3199C14.2991 16.3199 13.4399 15.4607 13.4399 14.3999C13.4399 13.3391 14.2991 12.4799 15.3599 12.4799C16.4207 12.4799 17.2799 13.3391 17.2799 14.3999C17.2799 15.4607 16.4207 16.3199 15.3599 16.3199ZM35.5199 33.5999H31.6799V28.7999V26.3999C31.6799 24.5519 30.1679 23.0399 28.3199 23.0399C26.4719 23.0399 24.9599 24.5519 24.9599 26.3999V33.5999H21.1199V19.1999H24.9599V20.9433C26.0812 19.8662 27.6018 19.1999 29.2799 19.1999C32.7263 19.1999 35.5199 21.9935 35.5199 25.4399V33.5999Z"
                    fill="black"
                  />
                </svg>
              </a>

              <a
                rel="noreferrer"
                aria-label="GitHub"
                href="https://github.com/thecrazybob"
                target="_blank"
              >
                <svg
                  className="py-[2px] px-[1px]"
                  width="48"
                  height="48"
                  viewBox="0 0 33 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect
                      x="-136.32"
                      y="-107.441"
                      width="530.973"
                      height="275.986"
                      fill="none"
                    />
                    <path
                      d="M16.288,-0c-8.995,-0 -16.288,7.293 -16.288,16.29c0,7.197 4.667,13.302 11.14,15.457c0.815,0.149 1.112,-0.354 1.112,-0.786c0,-0.386 -0.014,-1.411 -0.022,-2.77c-4.531,0.984 -5.487,-2.184 -5.487,-2.184c-0.741,-1.882 -1.809,-2.383 -1.809,-2.383c-1.479,-1.01 0.112,-0.99 0.112,-0.99c1.635,0.115 2.495,1.679 2.495,1.679c1.453,2.489 3.813,1.77 4.741,1.353c0.148,-1.052 0.568,-1.77 1.034,-2.177c-3.617,-0.411 -7.42,-1.809 -7.42,-8.051c0,-1.778 0.635,-3.232 1.677,-4.371c-0.168,-0.412 -0.727,-2.068 0.159,-4.311c0,-0 1.368,-0.438 4.48,1.67c1.299,-0.362 2.693,-0.542 4.078,-0.548c1.383,0.006 2.777,0.186 4.078,0.548c3.11,-2.108 4.475,-1.67 4.475,-1.67c0.889,2.243 0.33,3.899 0.162,4.311c1.044,1.139 1.675,2.593 1.675,4.371c0,6.258 -3.809,7.635 -7.438,8.038c0.585,0.503 1.106,1.497 1.106,3.017c0,2.177 -0.02,3.934 -0.02,4.468c0,0.436 0.293,0.943 1.12,0.784c6.468,-2.159 11.131,-8.26 11.131,-15.455c0,-8.997 -7.294,-16.29 -16.291,-16.29"
                      fill="black"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:justify-self-end">
          <div className="text-3xl">
            I am available to work<br></br> on your project{" "}
            <svg
              className="inline dark:invert"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9885 0L8.98846 0L8.98846 18.3146L2.05385 11.3126L0 13.4097L10.4885 24L21 13.4097L18.9 11.3126L11.9885 18.3146L11.9885 0Z"
                fill="#181717"
              />
            </svg>
          </div>

          <div className="text-3xl hover:underline">
            <a href="mailto:hey@msohail.dev">hey@msohail.dev</a>
          </div>

          <div className="max-w-max font-light transition-all duration-150 ease-in-out hover:border-b hover:border-black dark:hover:border-white">
            <a target="_blank" href="https://cv.msohail.dev">
              View Resume ↗
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0">
        <div className="text-blue-600 dark:text-white">
          © {new Date().getFullYear()} Mohammed Sohail
        </div>
        <div>
          Built with crafty intentions in 🇹🇷 -{" "}
          <a
            className="font-medium text-white hover:underline"
            href="https://github.com/thecrazybob/msohail.dev"
            target="_blank"
          >
            View source code ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
