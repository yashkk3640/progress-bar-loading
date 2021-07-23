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

import { ProgressBar } from '@yashkk3640/progress-bar-loading'
import '@yashkk3640/progress-bar-loading/dist/index.css'

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

## Parameters

| Properties       | Type    | Default | Description               |
| ---------------- | ------- | ------- | ------------------------- |
| **height**       | string  | `4px`   | Height of the Bar         |
| **loadingTime**  | string  | `5s`    | time to reach to 90%      |
| **completeTime** | string  | `1s`    | time to reach 90% to 100% |
| **flag**         | boolean | none    | loading flag              |

## Live Examples

Here is a [demo](https://yashkk3640.github.io/progress-bar-loading/) of ProgressBar
You can open it and check how it's work and also play with progress-bar

## License

MIT © [Yash Khatri](https://github.com/yashkk3640)
