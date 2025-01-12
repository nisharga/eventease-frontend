import {
    FONT_DEFAULT,
    SITE_DESCRIPTION_DEFAULT,
    SITE_DOMAIN,
    SITE_TITLE_DEFAULT,
    SITE_TITLE_TEMPLATE_DEFAULT,
    SITE_VERIFICATION_GOOGLE_DEFAULT
} from '@/config';
import { ThemeProvider } from '@/providers/theme-provider';
import { Metadata } from 'next';
import React from 'react';
import '../styles/global.css';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_DOMAIN),
    title: {
        default: SITE_TITLE_DEFAULT,
        template: SITE_TITLE_TEMPLATE_DEFAULT
    },
    description: SITE_DESCRIPTION_DEFAULT,
    verification: {
        google: SITE_VERIFICATION_GOOGLE_DEFAULT
    },
    icons: {
        icon: {
            url: '/favicon.svg',
            type: 'images/svg'
        }
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${FONT_DEFAULT.variable} `}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    {children}
                </ThemeProvider>

                <Toaster
                    position='top-center'
                    // reverseOrder={true}
                    toastOptions={{
                        style: {
                            padding: '0.725rem',
                            color: '#08195E'
                        },
                        success: {
                            style: {
                                // border: '1px solid #723eeb',
                            },
                            iconTheme: {
                                primary: '#08195E',
                                secondary: '#fff'
                            }
                        },
                        error: {
                            style: {
                                // border: '1px solid #dc3545',
                                color: '#08195E'
                            },
                            iconTheme: {
                                primary: '#dc3545',
                                secondary: '#fff'
                            }
                        },
                        iconTheme: {
                            primary: '#08195E',
                            secondary: '#FFFAEE'
                        }
                    }}
                />
            </body>
        </html>
    );
}
