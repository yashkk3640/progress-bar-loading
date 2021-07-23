import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

const DARK = 'blue'
const NORMAL = 'blue'
const LIGHT = 'lightblue'
const LIGHT_SKY = 'deepskyblue'

const BACKGROUND = `repeating-linear-gradient(to right, ${DARK}, ${DARK}, ${NORMAL}, ${NORMAL}, ${LIGHT}, ${LIGHT_SKY}, ${LIGHT}, ${NORMAL}, ${NORMAL}, ${DARK}, ${DARK})`

/**
 * ProgressBar to show fake loading on Screen
 * @param {*} height type string, it is height of the Bar (default value 4px)
 * @param {*} loadingTime type string, it is loading time is time to reach to 90% (default value 5s)
 * @param {*} completeTime type string, it is complete time is time to reach 90% to 100% (default value 1s)
 * @param {*} flag type boolean, it is loading flag need to send form out side
 */
const ProgressBar = ({
  height = '4px',
  loadingTime = '5s',
  completeTime = '1s',
  flag
}) => {
  return (
    <div
      className='progress-bar'
      style={{
        opacity: flag ? 1 : 0,
        animation:
          (flag
            ? 'loading ' + loadingTime + ' steps(100000000)'
            : 'complete ' + completeTime) + ', color-transition 2s infinite',
        maxWidth: flag ? '90%' : '100%',
        height: height,
        background: BACKGROUND,
        backgroundSize: '300%'
      }}
    />
  )
}
export { ProgressBar }

ProgressBar.propTypes = {
  height: PropTypes.string,
  loadingTime: PropTypes.string,
  completeTime: PropTypes.string,
  flag: PropTypes.bool
}
