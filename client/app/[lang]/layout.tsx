import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import { Roboto } from 'next/font/google'
import Providers from '../store/providers'

const roboto = Roboto({
  subsets: ['latin'], // Замість порожнього масиву слід вказати потрібний набір символів
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'] // Якщо потрібні варіанти стилів
})
export const metadata: Metadata = {
  title: 'BayLap',
  description: ''
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang == 'ua' ? 'ru' : params.lang}>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
