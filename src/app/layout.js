import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Commponnent/Header";
import Footer from "../Commponnent/Footer";
import UptoPAge from "@/Commponnent/UptoPAge";
import { ClerkProvider } from "@clerk/nextjs";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nader Moves",
  description: "Get all movies ant TV",

};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
       
        <body className={inter.className}>
          <Header />
          {children}
          <UptoPAge />
          <Footer />
        </body>
      </html>

    </ClerkProvider>

  );
}
