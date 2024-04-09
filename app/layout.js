import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Management App",
  description: "Welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Search />
        {children}
        <ToastContainer/>
        </body>
    </html>
  );
}
