import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import AppShell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <SessionProvider session={pageProps.session}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
    </>
  );
}
  