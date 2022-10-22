import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import { getAllBrands } from '../../services/products'
import './Navbar.scss'
import { useEffect, useState } from 'react'

export default function Navbar(): JSX.Element {
  const [brands, setBrands] = useState<Array<string>>(['All'])
  const width: number = window.innerWidth

  useEffect(() => {
    getAllBrands().then((res) => setBrands(['All', ...res]))
  }, [])

  return width <= 900 ? MobileNavbar(brands) : DesktopNavbar(brands)
}

function DesktopNavbar(brands: Array<string>): JSX.Element {
  return (
    <nav className="desktop-nav">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        {brands.map((brand, i) => {
          return (
            <li key={i}>
              <NavLink to={`/brands/${brand.toLocaleLowerCase()}`}>{brand}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function MobileNavbar(brands: Array<string>): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false)

  window.addEventListener('scroll', () => setIsActive(false))

  return (
    <nav className="mobile-nav">
      <div className="hamburger" onClick={() => setIsActive((prev) => !prev)}>
        <Hamburger color="white" size={25} toggled={isActive} />
      </div>
      <ul
        className={`mobile-side-drawer ${isActive ? 'active' : ''}`}
        onClick={() => setIsActive(false)}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        {brands.map((brand, i) => {
          return (
            <li key={i}>
              <NavLink to={`/brands/${brand.toLocaleLowerCase()}`}>{brand}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
