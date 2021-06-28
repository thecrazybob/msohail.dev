import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-10 bg-white">
        <Head>
            <title>Mohammed Sohail</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans"
                rel="stylesheet"
            />
        </Head>

        <Header></Header>

        <Footer></Footer>
    </div>
  )
}
