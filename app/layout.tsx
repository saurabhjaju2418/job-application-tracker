import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Northstar — Job Search", description: "A thoughtful workspace for your job search." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

