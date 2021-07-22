# progress-bar-loading

> Showing fake `progress bar` for showing process is still running

[![NPM](https://img.shields.io/npm/v/progress-bar-loading.svg)](https://www.npmjs.com/package/progress-bar-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save progress-bar-loading
```

## Usage

```jsx
import React, {useState} from 'react'

import ProgressBar from 'progress-bar-loading'
import 'progress-bar-loading/dist/index.css'

const Example = ({...rest}) => {
  const [loading,setLoading] = useState(true)
  return
    <div>
      <ProgressBar flag={loading} />
      <h1>My Example Page</h1>
      <div>
        ... other stuff to render on page
      </div>
    <div>
}
```

## License

MIT © [Yash Khatri](https://github.com/yashkk3640)
