import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="TOO «VARRO OPERATING GROUP» НЕФТЕГАЗОВАЯ КОМПАНИЯ, ЗАНИМАЮЩАЯСЯ ДОБЫЧЕЙ И ПЕРЕРАБОТКОЙ УГЛЕВОДОРОДОВ В МАНГИСТАУСКОЙ ОБЛАСТИ"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
