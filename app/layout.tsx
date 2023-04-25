import Header from "./components/Header";
import { SessionProvider } from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "./globals.css";

export const metadata = {
  title: "DriveHui | Car Rental in Waikiki, Honolulu, Oahu",
  description:
    "Reserve a car with Hawaii's largest car sharing network. No lines, free parking, free gas. Instantly unlock a car with your phone using the Hui app.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
