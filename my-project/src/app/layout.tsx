import './globals.css'
import { Roboto } from 'next/font/google'
import { UserProvider } from '@/contexts/UserContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { JobsProvider } from '@/contexts/JobsContext';

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets:[ "latin-ext", "latin"]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <UserProvider>
          <JobsProvider>
            {children}
          </JobsProvider>
        </UserProvider>
      </body>
    </html>
  )
}
