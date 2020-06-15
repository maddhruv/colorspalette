import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { NextSeo } from "next-seo";

import META from "../config/meta";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={META.description} />
          <meta
            name="keywords"
            content="colors, color palette, palette, colors palette, palette colors, css colors, css color palettes, css palettes"
          />
          <link rel="icon" type="image/png" href="/logo-16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="author" content="Dhruv Jain" />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content="all" name="robots" />
          <meta content="all" name="googlebot" />
          <script
            async={true}
            src="https://www.googletagmanager.com/gtag/js?id=UA-168980967-3"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-168980967-3');`,
            }}
          />
          <NextSeo
            title={META.title}
            description={META.description}
            openGraph={{
              url: "https://smoothcss.xyz",
              title: META.title,
              description: META.description,
              site_name: META.name,
              images: [
                {
                  url: "https://colorspalette.vercel.app/logo-32.png",
                  width: 32,
                  height: 32,
                  alt: `${META.name} logo`,
                },
                {
                  url: "https://colorspalette.vercel.app/logo-64.png",
                  width: 64,
                  height: 64,
                  alt: `${META.name} logo`,
                },
                {
                  url: "https://colorspalette.vercel.app/logo-128.png",
                  width: 128,
                  height: 128,
                  alt: `${META.name} logo`,
                },
                {
                  url: "https://colorspalette.vercel.app/logo-256.png",
                  width: 256,
                  height: 256,
                  alt: `${META.name} logo`,
                },
              ],
            }}
            twitter={{
              handle: "@maddhruv",
              cardType: "app",
              site: "@maddhruv",
            }}
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
