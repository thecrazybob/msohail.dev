import TitleBar from "../components/title-bar"
import Project from "../components/project"
import weqayaLogo from '../public/project-weqaya.png'
import blesshostLogo from '../public/blesshost.png'
import trbeiLogo from '../public/trbei.png'
import cascadevirtualLogo from '../public/cascadevirtual.png'
import biltraderLogo from '../public/biltrader.png'
import laravelwhmcsLogo from '../public/laravel-whmcs.png'
import tesolLogo from '../public/tesol.png'
import wordpresslaravelLogo from '../public/wordpress-laravel.png'
import laravelLogo from '../public/laravel.svg'
import alpinejsLogo from '../public/alpinejs.svg'
import tailwindcssLogo from '../public/tailwindcss.svg'
import twillLogo from '../public/twill.svg'
import livewireLogo from '../public/livewire.svg'
import bootstrapLogo from '../public/bootstrap.svg'
import wordpressLogo from '../public/wordpress.svg'
import stripeLogo from '../public/stripe.svg'
import phpLogo from '../public/php.svg'
import codeigniterLogo from '../public/codeigniter.svg'
import springbootLogo from '../public/springboot.svg'
import vercelLogo from '../public/vercel.svg'
import reactLogo from '../public/react.svg'
import whmcsLogo from '../public/whmcs.svg'
import cpanelLogo from '../public/cpanel.svg'
import ubuntuLogo from '../public/ubuntu.svg'
import nginxLogo from '../public/nginx.svg'
import cloudflareLogo from '../public/cloudflare.svg'
import awsLogo from '../public/aws.svg'
import nextjsLogo from '../public/nextjs.svg'

export default function Work() {
    return (
        <>
        <TitleBar title="My Work" description="Some of the work that I have done over the past few years"></TitleBar>
        <div className="flex flex-col divide-y-2 divide-black">
        <Project title="01 / WEQAYA.AE" description="I designed and developed the website using cutting-edge technologies. The content is retrieved from a headless-CMS and the COVID-19 cases are retrieved using APIs." tech={[laravelLogo, alpinejsLogo, tailwindcssLogo, twillLogo, livewireLogo]} timeframe="< 1 month" image={weqayaLogo}></Project>
        <Project title="02 / BLESSHOST.COM" description="I designed the frontend views and connected it to the order system. The project also involved setting up servers which hosted 100’s of websites." tech={[laravelLogo, whmcsLogo, bootstrapLogo, cpanelLogo, ubuntuLogo, nginxLogo, cloudflareLogo]} timeframe="> 1 year" image={blesshostLogo}></Project>
        <Project title="03 / TRBEI.COM" description="The project included the development of the sales pages as well as the development of a customized user dashboard and game checkout process." tech={[laravelLogo, bootstrapLogo, wordpressLogo]} timeframe="< 3 months" image={trbeiLogo}></Project>
        <Project title="04 / CASCADEVIRTUAL" description="This project involved the development of a customer dashboard and another dashboard for virtual assistants." tech={[phpLogo, codeigniterLogo, stripeLogo]} timeframe="< 1 month" image={cascadevirtualLogo}></Project>
        <Project title="05 / BILTRADER" description="A classified web app meant for the members of Bilkent University. The app was made as a single page React application connected to Spring Boot via APIs" tech={[reactLogo, vercelLogo, awsLogo, springbootLogo, nextjsLogo]} timeframe="< 1 month" image={biltraderLogo}></Project>
        <Project title="06 / LARAVEL WHMCS PACKAGE" description="A Laravel package which helps connect to WHMCS API. The package is open-sourced on GitHub." tech={[laravelLogo, whmcsLogo, phpLogo]} timeframe="< 1 month" image={laravelwhmcsLogo}></Project>
        <Project title="07 / TESOL CERTIFICATE GENERATOR" description="This application was used to generate certificates for the attendes and presentators of TESOL Arabia 2020" tech={[laravelLogo, phpLogo, wordpressLogo]} timeframe="< 1 week" image={tesolLogo}></Project>
        <Project title="08 / WORDPRESS &amp; LARAVEL" description="From simple blogs to complex dashboards, I have worked on numerous WordPress and Laravel websites over the 8+ years." tech="A wide variety of WordPress themes and plugins and extensive Laravel packages" timeframe="2013 - Now" image={wordpresslaravelLogo}></Project>

        </div>
        </>
    )
}
