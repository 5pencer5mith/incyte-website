// Utility
import { Roboto } from "next/font/google";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Styles
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
      <body className={`${roboto.className} container`}>
        <div>
          <Header />

          <div className="spacer"></div>

          <div className="content">{children}</div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
