import '../styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Head from 'next/head'

export const metadata = {
  title: 'Підказовія',
  description: 'Відкривайте та поширюйте промпти для штучного інтелекту',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="uk">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
export default RootLayout
