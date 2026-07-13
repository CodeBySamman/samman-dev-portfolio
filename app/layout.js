import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samman Shaehzadi | Full Stack MERN & Next.js Developer",
  description:
    "Portfolio of Samman Shaehzadi, a Full Stack Web Developer specializing in MERN Stack and Next.js. Explore projects including Ovilo Store, GetMeAChai, Business Insights, and Cloud Notes built with MongoDB, Express.js, React, Node.js, and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Navbar/>
       <main className="flex-1 mt-10 sm:mt-7">
        {children}

      </main>
        <Footer/>
        </body>
    </html>
  );
}
