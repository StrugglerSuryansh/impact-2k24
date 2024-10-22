import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="opacity-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
