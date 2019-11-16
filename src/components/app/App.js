import './App.scss'

import React from 'react'

import TwitterLogin from '../twitter-login/TwitterLogin'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../footer/Footer'

import { fetchUserData } from '../../services/apiService'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true, error: '', userData: null }
  }

  async componentDidMount () {
    this.setState({ error: '' })
    try {
      const { userData, location } = await fetchUserData()
  console.log('location from fetchUserData()', location);
      this.setState({ userData, location })
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
  }

  renderMain () {
    const { loading, userData, location, error } = this.state
    if (loading) {
      return <p>Loading...</p>
    }
    if (userData) {
      return <Dashboard userData={userData} location={location}  />
    }

    return (
      <div>
        {error ? <p className='error'>{error}</p> : ''}
        <h2>Your voice on Twitter can help win the election for Labour - find out how!</h2>
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
        <div className='app__title'>
          <h1>Know</h1>
          <h1>Your</h1>
          <h1>Followers</h1>
        </div>
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
