import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "cprg306-assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
