import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./Header.scss"

export default function Header() {
	return (
		<header className="site-header">
			<div className="inner-header">
				<div className="site-logo">
					<Link to="/">CHEN MOBILE</Link>
				</div>
				<Navbar />
			</div>
		</header>
	)
}
