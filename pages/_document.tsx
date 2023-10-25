
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EM01G3PYRV"></script>
                    <Script>
                       {` window.dataLayer = window.dataLayer || []
                        function gtag() {
                            (window as any).dataLayer.push(arguments)
                        }
                        gtag('js', new Date());
                        gtag('config', 'G-EM01G3PYRV');`}
                    </Script>
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