import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark, // Clerk dark theme
      }}
    >
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className="bg-background text-foreground transition-all duration-300">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>Made with 💗 by Aniket</p>

                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://github.com/anigawade45" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-black transition-colors  dark:hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/aniket-gawade-5095b52b2/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors dark:hover:text-white" />
                  </a>
                </div>

                <div className="flex justify-center gap-6 mt-6 text-sm">
                  <Link className="hover:text-black dark:hover:text-white" href="/">Home</Link>
                  <Link className="hover:text-black dark:hover:text-white" href="/features">Features</Link>
                  <Link className="hover:text-black dark:hover:text-white" href="/tools">Tools</Link>
                </div>

                <p className="text-xs mt-4">© {new Date().getFullYear()} Sensai. All rights reserved.</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
