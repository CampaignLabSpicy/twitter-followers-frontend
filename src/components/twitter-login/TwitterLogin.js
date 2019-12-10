import React from 'react'
import { API_URL } from '../../constants'
import './TwitterLogin.scss'

class TwitterLogin extends React.Component {
  static onClickLogin () {
    window.location = `${API_URL}/sessions/connect?client=react`
  }

  constructor (props) {
    super(props)
    this.state = { showWhy: false }
  }

  onClickWhy () {
    this.setState({ showWhy: !this.state.showWhy })
  }

  render () {
    return (
      <div className='twitter-login'>
        <button className='twitter-login__button button' type='button' onClick={() => TwitterLogin.onClickLogin()}>
          <span>Sign in with Twitter</span>
          <img src='/images/Twitter.svg' alt='Twitter' />
        </button>
        <div className='twitter-login__smallprint'>
          <p>
            Know Your Followers doesn't store or share any data relating to your Twitter account, or post anything on Twitter.
            So why do I need to sign in?
          </p>
          <p className='twitter-login__reason'>
            Logging in with your account lets us access Twitter’s data directly through its API to analyse the people who follow you.
            The tool is designed for activists, so will not work if you have more than 10,000 followers.
          </p>
        </div>
      </div>
    )
  }
}

export default TwitterLogin
