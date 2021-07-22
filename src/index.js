import React from 'react'
import './index.css'

const DARK = 'blue'
const NORMAL = 'blue'
const LIGHT = 'lightblue'
const LIGHT_SKY = 'deepskyblue'

const BACKGROUND = `repeating-linear-gradient(to right, ${DARK}, ${DARK}, ${NORMAL}, ${NORMAL}, ${LIGHT}, ${LIGHT_SKY}, ${LIGHT}, ${NORMAL}, ${NORMAL}, ${DARK}, ${DARK})`

const ProgressBar = ({
  height = '4px',
  loadingTime = '5s',
  completeTIme = '1s',
  flag
}) => {
  return (
    <div
      className='progress-bar'
      style={{
        opacity: flag ? 1 : 0,
        animation:
          (flag ? 'loading ' + loadingTime : 'complete ' + completeTIme) +
          ', color-transition 2s infinite',
        maxWidth: flag ? '90%' : '100%',
        height: height,
        background: BACKGROUND,
        backgroundSize: '300%'
      }}
    />
  )
}
export default ProgressBar
