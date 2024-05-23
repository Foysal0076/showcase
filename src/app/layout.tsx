import '@/styles/globals.css'
import '@/styles/globals.scss'

import { Plus_Jakarta_Sans } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

// eslint-disable-next-line no-unused-vars
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata = {
  title: 'Next.js + Tailwind CSS Starter',
  description:
    'A starter template to build amazing static websites with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
      <body className={`${plusJakartaSans.variable}`} suppressHydrationWarning>
        <div className='flex min-h-screen flex-col justify-between bg-neutral-0 dark:bg-neutral-900'>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
