import '../styles/globals.css'
import { getServerSideProps } from "next/app"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
