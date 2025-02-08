import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "400", "700"],
  });

export const metadata = {
  title: "Sperm In-Cyte",
  description: "A revolutionary approach to bull fertility analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
