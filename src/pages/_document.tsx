// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#b62535" />
          <meta name="viewport" content="user-scalable=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Synqat" />
          <meta name="apple-mobile-web-app-title" content="Synqat" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#b62535" />

          <title>Synqat</title>

          <meta name="title" content="Synqat" />
          <meta
            name="description"
            content="Hello. I'm a Front-end Engineer. I have a wide range of skills and hobbies, most of which involve making websites shine."
          />
          <meta
            name="keywords"
            content="engineer, frontend, synqat, synccat, syncat, syn-cat, synq, sync, cat, synqqat"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="@Synqat" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://synqat.dev/" />
          <meta property="og:title" content="Synqat" />
          <meta
            property="og:description"
            content="Hello. I'm a Front-end Engineer. I have a wide range of skills and hobbies, most of which involve making websites shine."
          />
          <meta property="og:image" content="/images/cat.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://synqat.dev/" />
          <meta property="twitter:title" content="Synqat" />
          <meta
            property="twitter:description"
            content="Hello. I'm a Front-end Engineer. I have a wide range of skills and hobbies, most of which involve making websites shine."
          />
          <meta property="twitter:image" content="/images/cat.jpg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Nunito:wght@200;300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
