import './Follow.scss'

import React from 'react'

import {  } from '../../constants'

// import getCopyFollow from '../../copyFollow'

const Follow = ({ handles, defaultFollow }) => {
  return (
      (handles || defaultFollow) ?
        <div>
          Get connected to your local Labour network by following these local Twitter handles
          {
            handles.length ?
              handles
              : defaultFollow
          }
        </div>
        : <></>
  )
}

export default Follow
