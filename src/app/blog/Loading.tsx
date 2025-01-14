"use client"
import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div><SyncLoader/></div>
  )
}

export default Loading