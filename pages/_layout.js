import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ children }) {
    return (
        <div className="container mx-auto px-10 bg-white-background">

            <Head>
                <title>Mohammed Sohail</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>

            <Header></Header>

            {children}

            <Footer></Footer>

        </div>
    )
}
