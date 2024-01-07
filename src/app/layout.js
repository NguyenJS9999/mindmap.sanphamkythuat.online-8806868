import { Inter } from 'next/font/google'
import './globals.scss'
import './common.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { siteConfig } from '~/config/site';
import { Metadata } from 'next'
import { Providers } from './Providers'
import { Toaster } from 'react-hot-toast';
import Header from '~/components/header/Header';
import AuthProvider from '~/components/AuthProvider';
import Footer from '~/components/footer/Footer.jsx';
import { getServerSession } from "next-auth";


const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Mindmap của tôi - Minmap follow',
//   description: 'Super Mindmap',
// }

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Title webtsite',
  description: 'this is the desciption',
  openGraph: {
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}

async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <Providers session={session}>
              <Header session={session}/>
                <div>
                  {children}
                </div>
            <Footer/>
            <Toaster />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout;
