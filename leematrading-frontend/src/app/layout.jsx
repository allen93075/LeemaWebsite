import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Leematrading",
  description: "Leema Trading Co., Ltd - Your Gateway to Global Trade",
  keywords: ["Leema", "Trading", "Global Trade", "Customer Service"],
  authors: [{name:"Leema Trading Co., Ltd"}],
  icons : {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#001F3F] text-white min-h-screen flex flex-col`}
      >
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
