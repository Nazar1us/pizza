import { Outlet } from 'react-router-dom'
import Header from '@/components/layouts/header/Header.jsx'

const RootLayout = () => {
    return (
        <div className='h-screen flex flex-col'>
          <Header />
          <div className='flex-grow grid grid-cols-[300px_1fr]'>
            <aside className='border-r border-r-red-400'>
              Sidebar
            </aside>
            <main className='h-full bg-amber-300'>
              <Outlet />
            </main>
          </div>
        </div>
    )
}

export default RootLayout
