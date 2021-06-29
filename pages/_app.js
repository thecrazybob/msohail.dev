import 'tailwindcss/tailwind.css'
import '../assets/global.css'

import Layout from '../pages/_layout'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
