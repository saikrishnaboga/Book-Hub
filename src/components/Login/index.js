import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccuss = JwtToken => {
    const {history} = this.props

    Cookies.set('Jwt_token', JwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccuss(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const Token = Cookies.get('jwt_token')

    if (Token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/saikrishnaboga-ccbp-tech/image/upload/v1643539631/Book-Hub%20/Rectangle_1467bookhub-login-bg-img_s45xsa.png"
          alt="website logo"
          className="login-website-logo-mobile-image"
        />
        <img
          src="https://res.cloudinary.com/saikrishnaboga-ccbp-tech/image/upload/v1643539631/Book-Hub%20/Rectangle_1467bookhub-login-bg-img_s45xsa.png"
          alt="website login"
          className="login-image"
        />
        <div className="form-main-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/saikrishnaboga-ccbp-tech/image/upload/v1643539861/Book-Hub%20/Group_7731login-B-logo_vneo4x.png"
              alt="website logo"
              className="login-website-logo-desktop-image"
            />
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
