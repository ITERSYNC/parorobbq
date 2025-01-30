import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paroro Korean BBQ Melbourne | All-You-Can-Eat Korean BBQ Buffet',
  description: 'Melbourne’s best Korean BBQ restaurant'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <Head>
        {/* Update the title to include keywords "Australia's best" and "Melbourne's best Korean BBQ" */}
        <title>
          Melbourne&apos;s Best Korean BBQ | Paroro Korean BBQ |
          Australia&apos;s Top Choice
        </title>
        {/* Add meta description with keywords for better searchability */}
        <meta
          name='description'
          content=' Experience the best Korean BBQ in Melbourne at Paroro, featuring an all-you-can-eat BBQ buffet with delicious meats and authentic. Visit us today!'
        />
        {/* Add additional meta tags for SEO optimization */}
        <meta
          name='keywords'
          content='Korean BBQ, Melbourne, Australia, Best Korean BBQ, Paroro Korean BBQ'
        />
        <meta
          property='og:title'
          content="Melbourne's Best Korean BBQ | Paroro Korean BBQ"
        />
        <meta
          property='og:description'
          content='Experience the best Korean BBQ in Melbourne at Paroro, featuring an all-you-can-eat BBQ buffet with delicious meats and authentic. Visit us today!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='www.paroro.com.au' />
        <meta
          property='og:image'
          content='URL_TO_AN_IMAGE_OF_YOUR_RESTAURANT'
        />
        {/* Include charset and viewport for better SEO and responsiveness */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/assets/logo.svg' />
      </Head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='AW-16761090328' />
    </html>
  )
}
