
import "./globals.css";
import Navbar from './components/Navbar'


export const metadata = {
  title: "Tradvisor",
  description: "Tradvisor is designed to be a user-friendly online platform that connects buyers and sellers from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="z-10">

        <Navbar/>
        {children}
      
      </body>
    </html>
  );
}
