import './PostcodeModal.scss'

import React from 'react'

import Tweet from '../tweet/Tweet'
import { SEEK_POSTCODES } from '../../constants'

// import getCopyLocal from '../../copyLocal'

const PostcodeModal = ({ location={} }) => {
  const { specificity=0 } = location
  const needMoreSpecificity = SEEK_POSTCODES && (specificity < 10)
  return (
      <div
        className = { needMoreSpecificity ? "modal" : "noshow"}>
        <div className = "modal-content flex-centre-container">
          <div>
          <p>{
            (needMoreSpecificity) ?
              ``
              : ``
          }</p>
          </div>
        </div>
      </div>
  )
}

export default PostcodeModal
