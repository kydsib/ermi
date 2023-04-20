import type { AppProps } from 'next/app'
import { Barlow } from 'next/font/google'
import '@styles/globals.css'

const barlow = Barlow({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
 })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: 'Barlow', sans-serif;
      }
    `}</style>
    <Component {...pageProps} />
    </>
  )
}
