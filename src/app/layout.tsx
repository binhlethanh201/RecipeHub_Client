import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import { ReactNode } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: "RecipeHub",
  description: "A collection of tasty recipes",
  icons: {
    icon: '/recipe.png',
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
