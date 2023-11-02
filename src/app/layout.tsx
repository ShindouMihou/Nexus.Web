import type { Metadata } from 'next'
import './globals.css'
import {inter} from "@/app/fonts";
import Header from "@/components/Header";
import React from "react";

export const metadata: Metadata = {
  title: 'Nexus',
  description: 'Making Discord Bot Development in Kotlin-Java easier.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen">
            <Header/>
            <main>
              {children}
            </main>
          </div>
        </body>
      </html>
  )
}
