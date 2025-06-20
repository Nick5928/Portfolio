
import "./globals.css";

export const metadata = {
  title: "Nick Jones Portfolio",
  description: "Website portfolio for Nick Jones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
