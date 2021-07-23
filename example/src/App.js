import React, { useState } from 'react'

import { ProgressBar } from 'progress-bar-loading/dist'
import 'progress-bar-loading/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [height, setHeight] = useState('6px')
  const [loadingTime, setLoadingTime] = useState('5s')
  const [completeTime, setCompleteTime] = useState('1s')
  const toggle = () => setLoading((l) => !l)
  return (
    <div>
      <ProgressBar
        flag={loading}
        height={height}
        loadingTime={loadingTime}
        completeTime={completeTime}
      />
      <h1>
        Progress Bar Loading Example{' '}
        <span role='img' aria-label='smile'>
          😄
        </span>
      </h1>
      <div>
        {loading ? (
          <>
            <h3>We are doing something in background</h3>
            <div>Wait.., it's wll be completed shortly</div>
          </>
        ) : (
          <>
            <h3>Process Completed</h3>
            <div>You can start another process to saw Loading again</div>
          </>
        )}
      </div>
      <div style={{ margin: '20px' }}>
        <label htmlFor='height'>Height of Bar : </label>
        <input
          id='height'
          name='height'
          placeholder='Height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor='loadingTime'>Loading Time : </label>
        <input
          id='loadingTime'
          name='loadingTime'
          placeholder='Loading Time'
          value={loadingTime}
          onChange={(e) => setLoadingTime(e.target.value)}
        />
        <label htmlFor='completeTime'>Complete Time : </label>
        <input
          id='completeTime'
          name='completeTime'
          placeholder='Complete Time'
          value={completeTime}
          onChange={(e) => setCompleteTime(e.target.value)}
        />
      </div>
      <div className='button-div'>
        {loading ? (
          <button onClick={toggle}>Complete Process</button>
        ) : (
          <button onClick={toggle}>Start Process</button>
        )}
      </div>
      <h2 className='thanks-div'>
        Thank You !!!
        <span style={{ marginLeft: '5px' }} role='img' aria-label='smile'>
          🤗
        </span>
      </h2>
    </div>
  )
}

export default App
