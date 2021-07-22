import React, { useState } from 'react'

import ProgressBar from 'progress-bar-loading/dist'
import 'progress-bar-loading/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const toggle = () => setLoading((l) => !l)
  return (
    <div>
      <ProgressBar flag={loading} />
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
