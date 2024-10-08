import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Toaster } from "react-hot-toast";
import Layout from "./layout/Layout";
export const metadata: Metadata = {
  title: "Amazon Clone | Your Shopping ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont">
        <Layout>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
