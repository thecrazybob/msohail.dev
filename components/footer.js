import Image from "next/image";
import SpotifyLogo from "../public/spotify.png";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Footer() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <footer className="border-t-2 pt-10 my-10 border-black dark:border-white">
      <div className="grid grid-flow-row gap-y-10 md:gap-y-0 grid-cols-1 md:grid-cols-2 mb-20">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="border-b border-black dark:border-white max-w-max">
              Currently listening to
            </div>
            <div className="flex space-x-2 items-center">
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
            <div className="border-b border-black dark:border-white max-w-max">
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
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9743 1.16064C10.6033 2.32111 2.26139 10.9085 1.13411 21.3527C0.00682162 32.261 6.09415 42.0089 15.3379 45.7224C16.0143 45.9545 16.6906 45.4903 16.6906 44.5619V40.8484C16.6906 40.8484 15.7888 41.0805 14.6615 41.0805C11.5051 41.0805 10.1524 38.2954 9.92692 36.6708C9.70146 35.7424 9.25055 35.0461 8.57418 34.3499C7.89781 34.1178 7.67235 34.1178 7.67235 33.8857C7.67235 33.4215 8.34872 33.4215 8.57418 33.4215C9.92692 33.4215 11.0542 35.0461 11.5051 35.7424C12.6324 37.5992 13.9851 38.0633 14.6615 38.0633C15.5633 38.0633 16.2397 37.8312 16.6906 37.5991C16.9161 35.9745 17.5924 34.3499 18.9452 33.4215C13.7597 32.261 9.92692 29.2438 9.92692 24.1378C9.92692 21.5848 11.0542 19.0318 12.6324 17.175C12.4069 16.7108 12.1815 15.5504 12.1815 13.9257C12.1815 12.9974 12.1815 11.6048 12.8579 10.2122C12.8579 10.2122 16.0143 10.2122 19.1706 13.2294C20.2979 12.7653 21.8761 12.5332 23.4543 12.5332C25.0325 12.5332 26.6107 12.7653 27.9635 13.2294C30.8944 10.2122 34.2762 10.2122 34.2762 10.2122C34.7272 11.6048 34.7272 12.9974 34.7272 13.9257C34.7272 15.7825 34.5017 16.7108 34.2762 17.175C35.8544 19.0318 36.9817 21.3527 36.9817 24.1378C36.9817 29.2438 33.149 32.261 27.9635 33.4215C29.3162 34.5819 30.218 36.6708 30.218 38.7596V44.794C30.218 45.4903 30.8944 46.1866 31.7962 45.9545C40.1381 42.4731 46 34.1178 46 24.3699C46 10.4443 34.5017 -0.464003 20.9743 1.16064Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:justify-self-end space-y-4">
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

          <div className="font-light hover:border-b hover:border-black dark:hover:border-white max-w-max transition-all duration-150 ease-in-out">
            <a href="https://cv.msohail.dev">View Resume ???</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
        <div className="text-blue-600 dark:text-white">
          ?? 2021 Mohammed Sohail
        </div>
        <div>Built with crafty intentions ???? in Ankara ????????</div>
      </div>
    </footer>
  );
}
