import "./globals.css";
import {Providers} from "@/config/providers";
import {poppins} from "@/config/fonts";
import {siteConfig} from "@/config/site";

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
