import Image from "next/image"
import SpotifyLogo from "../public/spotify.png"

export default function Footer() {
    return (

        <footer>

            <div class="grid grid-flow-row gap-y-10 md:gap-y-0 grid-cols-1 md:grid-cols-2 mb-20">

                <div class="flex flex-col space-y-6">
                    <div class="flex flex-col space-y-6">
                        <div class="border-b border-black max-w-max">Currently listening to</div>
                        <div class="flex space-x-2 items-center">
                            <Image src={SpotifyLogo} height={32} width={107} alt="Spotify Logo"></Image>
                            <div> - Not Playing</div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div className="border-b border-black max-w-max">Follow me on social media</div>
                        <div className="flex space-x-4">

                            <a href="https://www.twitter.com/itscrazybob" target="_blank">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.9999 1.91992C11.8242 1.91992 1.91992 11.8242 1.91992 23.9999C1.91992 36.1756 11.8242 46.0799 23.9999 46.0799C36.1756 46.0799 46.0799 36.1756 46.0799 23.9999C46.0799 11.8242 36.1756 1.91992 23.9999 1.91992ZM34.7874 19.703C34.797 19.9295 34.8028 20.1599 34.8028 20.3913C34.8028 27.4166 29.4527 35.5199 19.6713 35.5199C16.6684 35.5199 13.8719 34.6396 11.5199 33.1305C11.9356 33.1804 12.357 33.2044 12.7881 33.2044C15.2802 33.2044 17.5737 32.3558 19.3919 30.9292C17.0649 30.887 15.1026 29.3462 14.4239 27.2361C14.7494 27.2985 15.0825 27.3321 15.4262 27.3321C15.911 27.3321 16.3814 27.2678 16.8258 27.1449C14.3951 26.6543 12.5625 24.5078 12.5625 21.9302C12.5625 21.9071 12.5625 21.885 12.5625 21.863C13.2796 22.2614 14.0985 22.5014 14.9711 22.5292C13.5426 21.574 12.6057 19.9478 12.6057 18.1026C12.6057 17.1282 12.8668 16.2153 13.3247 15.4281C15.9484 18.645 19.8671 20.7618 24.286 20.9846C24.1948 20.5948 24.1468 20.1897 24.1468 19.773C24.1468 16.8364 26.5276 14.4556 29.4652 14.4556C30.9945 14.4556 32.3759 15.1007 33.3455 16.1346C34.5561 15.8966 35.6956 15.454 36.7228 14.8454C36.3263 16.0857 35.4825 17.1282 34.3833 17.7868C35.4604 17.6562 36.4838 17.3721 37.439 16.9487C36.7266 18.0153 35.8252 18.9532 34.7874 19.703Z" fill="black"/>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/thecrazybob/" target="_blank">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.9999 1.91992C11.8252 1.91992 1.91992 11.8242 1.91992 23.9999C1.91992 36.1756 11.8252 46.0799 23.9999 46.0799C36.1746 46.0799 46.0799 36.1756 46.0799 23.9999C46.0799 11.8242 36.1746 1.91992 23.9999 1.91992ZM17.2799 33.5999H13.4399V19.1999H17.2799V33.5999ZM15.3599 16.3199C14.2991 16.3199 13.4399 15.4607 13.4399 14.3999C13.4399 13.3391 14.2991 12.4799 15.3599 12.4799C16.4207 12.4799 17.2799 13.3391 17.2799 14.3999C17.2799 15.4607 16.4207 16.3199 15.3599 16.3199ZM35.5199 33.5999H31.6799V28.7999V26.3999C31.6799 24.5519 30.1679 23.0399 28.3199 23.0399C26.4719 23.0399 24.9599 24.5519 24.9599 26.3999V33.5999H21.1199V19.1999H24.9599V20.9433C26.0812 19.8662 27.6018 19.1999 29.2799 19.1999C32.7263 19.1999 35.5199 21.9935 35.5199 25.4399V33.5999Z" fill="black"/>
                                </svg>
                            </a>

                            <a href="https://github.com/thecrazybob" target="_blank">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8 4.19995C12.6 5.19995 5.20002 12.6 4.20002 21.6C3.20002 31 8.60002 39.4 16.8 42.6C17.4 42.8 18 42.4 18 41.6V38.4C18 38.4 17.2 38.6 16.2 38.6C13.4 38.6 12.2 36.2 12 34.8C11.8 34 11.4 33.4 10.8 32.8C10.2 32.6 10 32.6 10 32.4C10 32 10.6 32 10.8 32C12 32 13 33.4 13.4 34C14.4 35.6 15.6 36 16.2 36C17 36 17.6 35.8 18 35.6C18.2 34.2 18.8 32.8 20 32C15.4 31 12 28.4 12 24C12 21.8 13 19.6 14.4 18C14.2 17.6 14 16.6 14 15.2C14 14.4 14 13.2 14.6 12C14.6 12 17.4 12 20.2 14.6C21.2 14.2 22.6 14 24 14C25.4 14 26.8 14.2 28 14.6C30.6 12 33.6 12 33.6 12C34 13.2 34 14.4 34 15.2C34 16.8 33.8 17.6 33.6 18C35 19.6 36 21.6 36 24C36 28.4 32.6 31 28 32C29.2 33 30 34.8 30 36.6V41.8C30 42.4 30.6 43 31.4 42.8C38.8 39.8 44 32.6 44 24.2C44 12.2 33.8 2.79995 21.8 4.19995Z" fill="black"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:justify-self-end space-y-4">

                    <div className="text-3xl">I am available to work<br></br> on your project <svg className="inline" width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9885 0L8.98846 0L8.98846 18.3146L2.05385 11.3126L0 13.4097L10.4885 24L21 13.4097L18.9 11.3126L11.9885 18.3146L11.9885 0Z" fill="#181717"/>
</svg>
</div>

                    <div className="text-3xl"><a href="mailto:hey@thecrazybob.com">hey@thecrazybob.com</a></div>

                    <div className="font-light hover:border-b hover:border-black max-w-max transition-all duration-150 ease-in-out"><a href="https://cv.thecrazybob.com" target="_blank">View Resume ↗</a></div>

            </div>

            </div>

            <div className="flex justify-between">
                <div className="text-blue-600">© 2021 Mohammed Sohail</div>
                <div>Built with crafty intentions 🎨 in Ankara 🇹🇷</div>
            </div>

        </footer>
    )
}
