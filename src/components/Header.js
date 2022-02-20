import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h6 className='brand'>BRAND</h6>
    </header>
  )
}

export default Header