import React from 'react'
import './index.css'

const DARK = 'blue'
const NORMAL = 'blue'
const LIGHT = 'lightblue'
const LIGHT_SKY = 'deepskyblue'

const BACKGROUND = `repeating-linear-gradient(to right, ${DARK}, ${DARK}, ${NORMAL}, ${NORMAL}, ${LIGHT}, ${LIGHT_SKY}, ${LIGHT}, ${NORMAL}, ${NORMAL}, ${DARK}, ${DARK})`

const ProgressBar = ({ height = '4px', flag }) => {
  return (
    <div
      className='progress-bar'
      style={{
        animation:
          (flag ? 'loading 5s' : 'complete 0.01s') +
          ', color-transition 2s infinite',
        height: height,
        background: BACKGROUND,
        backgroundSize: '300%'
      }}
    />
  )
}
export default ProgressBar
