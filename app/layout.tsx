import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "DriveHui | Car Rental in Waikiki, Honolulu, Oahu",
  description:
    "Reserve a car with Hawaii's largest car sharing network. No lines, free parking, free gas. Instantly unlock a car with your phone using the Hui app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
