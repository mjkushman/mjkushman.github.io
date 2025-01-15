"use client"
import React, { ReactNode } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'



const LoadingCommon = (): ReactNode => {
  return (
    <div><SyncLoader/></div>
  )
}

export default LoadingCommon