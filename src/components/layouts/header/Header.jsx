import { Link } from 'react-router-dom'
import { PAGES_SLUGS } from '@/constants/pages.js'

const Header = () => {
  return (
    <header className='p-8 flex items-center gap-3  bg-red-300 border-b border-b-rose-900'>
      <Link to={PAGES_SLUGS.home} className='font-bold'>
        Logo
      </Link>
      <Link to={PAGES_SLUGS.cart}>
        Cart
      </Link>
    </header>
  )
}

export default Header
