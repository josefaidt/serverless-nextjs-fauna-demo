import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const site = {
  name: "Jed's Supply Co.",
  url: 'https://jeds-supply-co.vercel.app',
  description: 'Purchase local goods',
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta property="og:url" content={site.url}></meta>
          <meta property="og:title" content={site.name}></meta>
          <meta property="twitter:title" content={site.name}></meta>
          <meta property="og:description" content={site.description}></meta>
          <meta property="twitter:description" content={site.description}></meta>
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
          <meta property="image" content="/images/favicon.png"></meta>
          <meta property="og:image" content="/images/favicon.png"></meta>
          <meta property="twitter:image" content="/images/favicon.png"></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:creator" content="@josefaidt"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
