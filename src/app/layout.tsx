import type { Metadata } from "next";
import Script from "next/script";
import { Onest, JetBrains_Mono } from "next/font/google";
import { Geologica } from "next/font/google";
import "./globals.css";

const YM_ID = 107147908;
const GA_ID = "G-WH00ZYCH9N";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["cyrillic", "latin"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://d4o.tech"),
  title: {
    default: "D4O — Разработка IT-продуктов, которые зарабатывают",
    template: "%s | D4O",
  },
  description:
    "Продуктовое IT-агентство. SaaS-платформы, Telegram Mini-Apps, сервисы для маркетплейсов. AI-ускоренная разработка от предпринимателя.",
  keywords: [
    "разработка saas",
    "telegram mini app",
    "разработка бота",
    "IT агентство",
    "разработка на заказ",
    "разработка сайтов",
    "веб-разработка",
    "мобильная разработка",
    "AI разработка",
    "продуктовая разработка",
    "MVP разработка",
    "сервисы для маркетплейсов",
  ],
  openGraph: {
    title: "D4O — Разработка IT-продуктов, которые зарабатывают",
    description:
      "Продуктовое IT-агентство. SaaS, Telegram Mini-Apps, AI-интеграции.",
    url: "https://d4o.tech",
    siteName: "D4O",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "D4O — IT-агентство",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${onest.variable} ${geologica.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${GA_ID}');
          `}
        </Script>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}','ym');
            ym(${YM_ID},'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YM_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
