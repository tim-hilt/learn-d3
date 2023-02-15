import Navbar from "./Navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="p-4">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
