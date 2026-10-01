import type { Metadata, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = { title: "Northstar — Job Search", description: "A thoughtful workspace for your job search." };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

