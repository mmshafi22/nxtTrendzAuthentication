import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitFailure = data => {
    const errMsg = data.error_msg
    this.setState({username: '', password: '', errorMsg: errMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({username: '', password: ''})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-page-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-img"
          />
        </div>
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-logo"
          />
          <label htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={this.onChangeUsername}
            value={username}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.onChangePassword}
            value={password}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
