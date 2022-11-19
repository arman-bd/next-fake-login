import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const RECAPTCHA_SITE_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
