import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "../components/ui/ErrorReporter";
import CursorFollow from "../components/ui/cursor-follow";
import Script from "next/script";

export const metadata: Metadata = {
    title: "wezero.studio - Professional Website Development",
    description: "Quick turnaround, exceptional design, unbeatable pricing. We handle the heavy lifting so you can focus on your business.",
    icons: {
        icon: '/logo/wezero2.svg',
        shortcut: '/logo/wezero2.svg',
        apple: '/logo/wezero2.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </head>
            <body className="antialiased">
                <CursorFollow />
                <ErrorReporter />
                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
                    strategy="afterInteractive"
                    data-target-origin="*"
                    data-message-type="ROUTE_CHANGE"
                    data-include-search-params="true"
                    data-only-in-iframe="true"
                    data-debug="true"
                    data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
                />
                {children}
            </body>
        </html>
    );
}
