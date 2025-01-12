/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

export function ThemeProvider({ children, ...props }: any) {
    return (
        <main className='scroll-smooth' suppressHydrationWarning>
            {children}
        </main>
    );
}
