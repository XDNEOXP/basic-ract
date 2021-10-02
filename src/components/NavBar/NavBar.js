import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <ul className="NavBar">
        <li>
            <Link to="/">
              <button>Shop</button>
            </Link>
        </li>
        <li>
            <Link to="/about">
              <button>About</button>
            </Link>
        </li>
        <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
        </li>
        <li>
            <Link to='/blog'>
              <button>Blog</button>
            </Link>
        </li>
    </ul>
)

export default NavBar