import { Locale } from '@/i18n.config'

import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <>
      <header>
        <Header lang={params.lang} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer lang={params.lang} />
      </footer>
    </>
  )
}
