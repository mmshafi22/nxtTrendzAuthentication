import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="page-bg-container">
    <div className="home-page">
      <Header />
      <div className="profile-view-container">
        <div className="profile">
          <h1>Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="in-sm"
          />
          <p>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So,celebrate the seasons new and exiting
            fashion in your own way.
          </p>
          <button type="button" className="logout-btn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="in-lg"
        />
      </div>
    </div>
  </div>
)

export default Home
