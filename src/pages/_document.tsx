import FooterComponent from "@/components/FooterComponent";
import MenuAppBarComponent from "@/components/MenuAppBarComponent";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <MenuAppBarComponent />
        <Main />
        <NextScript />
        <FooterComponent></FooterComponent>
      </body>
    </Html>
  );
}
