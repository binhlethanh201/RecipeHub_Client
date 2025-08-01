import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
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
        {children}
      </body>
    </html>
  )
}
