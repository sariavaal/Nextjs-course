import './ui/global.css';
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      {children}
      <footer>
        <div className="py-10 flex items-center justify-center">
          Hecho con <span className="text-red-600">❤</span> por Sara Armoa
        </div>
      </footer>
      </body>
    </html>
  );
}
