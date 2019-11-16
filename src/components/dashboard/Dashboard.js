import './Dashboard.scss'

import React from 'react'

import Tweet from '../tweet/Tweet'
import Mailchimp from '../mailchimp/Mailchimp'

import { ACTIVIST_THRESHOLD } from '../../constants'
import getCopy from '../../copy'

const Dashboard = ({ userData }) => {
  const percentage = Math.round(userData.matched / userData.total * 100)
  const userType = percentage > ACTIVIST_THRESHOLD ? 'Mobiliser' : 'Converter'
  const { message, tweetText, tweetAction, tweetUrl } = getCopy(userType)
  return (
    <div className='dashboard'>
      <h2>You are a <em>{userType}</em></h2>
      <p>You have {userData.total} followers, {percentage}% already hear from Labour on Twitter.</p>
      <img src={'/images/' + userType + '.jpg'} alt={userType} />
      <p>{message.trim()}</p>
      <Tweet tweetText={tweetText} tweetUrl={tweetUrl} actionText={tweetAction} />
      <Mailchimp userType={userType} />
    </div>
  )
}

export default Dashboard
