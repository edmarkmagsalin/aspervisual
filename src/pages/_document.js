import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="AS PER VISUAL is a creative studio in the works to create visual content for creators & visionaries. Creative Design, Video Editing, Content Writing & Creation, Production, based in Manila, PH" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png?v=BGaNzpRrWl" />
            <link rel="icon" href="../favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png?v=BGaNzpRrWl" />
            <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png?v=BGaNzpRrWl" />
            <link rel="manifest" href="../favicon/site.webmanifest?v=BGaNzpRrWl" />
            <link rel="mask-icon" href="../favicon/safari-pinned-tab.svg?v=BGaNzpRrWl" color="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}