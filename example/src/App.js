import React from 'react'

import ProgressBar from 'progress-bar-loading/dist'
import 'progress-bar-loading/dist/index.css'

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <ProgressBar text='Create React Library Example 😄' flag={true} />
    </div>
  )
}

export default App
