import { NavLink } from "react-router-dom"
import { Squash as Hamburger } from "hamburger-react"
import { getAllBrands } from "../../services/products"
import "./Navbar.scss"

export default function Navbar(): JSX.Element {
	const brands: Array<string> = getAllBrands()
	const width: number = window.innerWidth

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
	return (
		<nav className="mobile-nav">
			<div className="hamburger">
				<Hamburger color="white" size={25} />
			</div>
			<ul className="mobile-side-drawer active">
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
