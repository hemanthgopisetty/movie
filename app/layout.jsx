import './globals.css'
export const metadata = {
  title: 'GhFlix',
  description: 'Explore all the new movies and tv shows about their cast ,content,new trailers',
}
import Header from '../lib/Components/HeaderComponent/Header'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full bg-slate-900 no-scrollbar flex flex-col justify-between'>
         <Header  />
          {children}
      </body>
    </html>
  )
}
