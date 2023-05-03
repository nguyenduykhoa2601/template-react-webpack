import { FC, useState } from 'react'

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fullname, _] = useState('NDK')
  return (
    <div>
      <h1>{fullname}</h1>
      <h2>INIT</h2>
    </div>
  )
}

export default App
