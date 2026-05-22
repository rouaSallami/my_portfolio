import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Roua | Full Stack Developer",
  description:
    "Portfolio of Roua, Full Stack Developer specialized in Next.js, Laravel and modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}