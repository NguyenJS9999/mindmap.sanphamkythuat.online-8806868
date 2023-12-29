import { Inter } from 'next/font/google'
import './globals.scss'
import './common.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { siteConfig } from '~/config/site';
import { Providers } from './Providers'
import { Toaster } from 'react-hot-toast';
import Header from '~/components/header/Header';
import AuthProvider from '~/components/AuthProvider';
import Footer from '~/components/footer/Footer.jsx';
import { getServerSession } from "next-auth";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
  openGraph: {
    images:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Elements_of_the_culture_mindmap.png",
  },
};

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
