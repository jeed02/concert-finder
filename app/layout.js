import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Concert Finder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <Nav />
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
