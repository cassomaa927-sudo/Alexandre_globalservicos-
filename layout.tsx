import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO">
      <body className="font-sans antialiased bg-deepCharcoal">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
