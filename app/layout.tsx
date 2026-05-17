import type { Metadata, Viewport } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const merriweather = Merriweather({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather" 
});

const openSans = Open_Sans({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans" 
});

export const viewport: Viewport = {
  themeColor: "#EE7B30",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "14 rzeczy, które robią najlepsi | Agata - Hiszpański",
  description: "Pobierz darmową checklistę i sprawdź, jakie nawyki językowe pomogą Ci w końcu swobodnie zacząć mówić po hiszpańsku.",
  icons: {
    icon: "/brand-logo.jpg",
    apple: "/brand-logo.jpg",
  },
  openGraph: {
    title: "14 rzeczy, które robią najlepsi | Agata - Hiszpański",
    description: "Pobierz darmową checklistę i sprawdź, jakie nawyki językowe pomogą Ci w końcu swobodnie zacząć mówić po hiszpańsku.",
    images: [
      {
        url: "/photo_desk1.jpg",
        width: 1200,
        height: 630,
        alt: "Agata Piątek - Ekspertka od Hiszpańskiego",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body 
        className={` ${merriweather.variable} ${openSans.variable} font-sans bg-background text-slate-800 overflow-x-hidden min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* MailerLite Universal Script */}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '973308');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
