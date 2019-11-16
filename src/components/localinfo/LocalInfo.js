import './LocalInfo.scss'

import React from 'react'

import Tweet from '../tweet/Tweet'

// import getCopyLocal from '../../copyLocal'

const LocalInfo = ({ location }) => {
  const constituency = location ? location.parliamentary_constituency : null
  return (
    <div className='localinfo'>
      <p>{
        constituency ?
          `Your constituency is ${constituency}.`
          : ``
      }</p>
    </div>
  )
}

export default LocalInfo
