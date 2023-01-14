import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="home-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="logout"
        className="logout-img"
      />
    </div>
    <ul className="text-links">
      <li>
        <Link to="/" className="link-text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className="link-text">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="link-text">
          Cart
        </Link>
      </li>
      <li>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
    <ul className="icon-links">
      <li>
        <Link to="/" className="icon-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home"
            className="icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/products" className="icon-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart" className="icon-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="icon"
            className="icon"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
