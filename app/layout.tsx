
import { inter } from '@/app/ui/fonts'
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Aside from "./components/aside";
import ProviderStore from './lib/testProv';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Psychoterapy news",
  description: "news agregator site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col bg-[#f9f5f0] min-h-screen h-full text-gray-900 font-inter">
          <Header />
            <ProviderStore>
              <main className="container mx-auto mt-6 px-6 flex flex-col grow h-full gap-8 md:flex-row">
              <section className="md:w-3/4">  
                    {children}
              </section>
              <Aside />
              </main>
            </ProviderStore>
          <Footer />
        </div>
      </body>
    </html>
  );
}
