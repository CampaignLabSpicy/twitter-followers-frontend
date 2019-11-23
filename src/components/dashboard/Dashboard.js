import './Dashboard.scss'

import React from 'react'

import Tweet from '../tweet/Tweet'
import Mailchimp from '../mailchimp/Mailchimp'

import getCopy from '../../copy'

const Dashboard = ({ userData }) => {
  const { userType, percentage } = userData
  const { message, tweetText, tweetAction, tweetUrl } = getCopy(userType)
  return (
    <div className='dashboard'>
      <p>
        <em>
          You have {userData.total} followers, {percentage}% already hear from Labour on Twitter.
        </em>
      </p>
      <p>{message.trim()}</p>
      <Tweet tweetText={tweetText} tweetUrl={tweetUrl} actionText={tweetAction} />
    </div>
  )
}

export default Dashboard
