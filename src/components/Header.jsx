import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-neutral'>
      <div className='align-element flex justify-center sm:justify-end gap-x-4 py-2'>
        <Link to={"/login"} className='link link-hover'>Sign in / Guest</Link>
        <Link to={"/register"} className='link link-hover'>Create accaunt</Link>
      </div>
    </header>
  )
}

export default Header
