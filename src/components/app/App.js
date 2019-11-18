import './App.scss'

import React from 'react'

import TwitterLogin from '../twitter-login/TwitterLogin'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../footer/Footer'

import { fetchUserData } from '../../services/apiService'
import getCopy from '../../copy'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true, error: '', userData: null }
  }

  async componentDidMount () {
    this.setState({ error: '' })
    try {
      const userData = await fetchUserData()
      this.setState({ userData })
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
  }

  renderTitle () {
    const { userData } = this.state
    if (!userData) {
      return (
        <div className='app__title'>
          <h1>Know your</h1>
          <h1>followers</h1>
          <p>
            <span role='img' aria-label='ear'>👂</span>
            <span role='img' aria-label='loudspeaker'>📢</span>
            <span role='img' aria-label='rose'>🌹</span>
          </p>
        </div>
      )
    }
    const { userType } = userData
    const { emoji } = getCopy(userType)
    return (
      <div className='app__title'>
        <h1>You are a <em>{userType}</em></h1>
        <p className='dashboard__emoji' dangerouslySetInnerHTML={{ __html: emoji }} />
      </div>
    )
  }

  renderMain () {
    const { loading, userData, error } = this.state
    if (loading) {
      return <p>Loading...</p>
    }
    if (userData) {
      return <Dashboard userData={userData} />
    }

    return (
      <div>
        {error ? <p className='error'>{error}</p> : ''}
        <h2>Your voice on Twitter can <em>help win the election for Labour</em></h2>
        <p>
          Know Your Followers analyses the people who follow you on Twitter and works out the best way that your tweets
          can build support for Labour and win the election. Find out what kind of digital activist you are, and become
          a part of the Labour 2019 Twitter campaign.
        </p>
        <TwitterLogin />
      </div>
    )
  }

  render () {
    return (
      <div className='app'>
        {this.renderTitle()}
        <div className='app__content'>
          <main className='app__main'>
            {this.renderMain()}
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
