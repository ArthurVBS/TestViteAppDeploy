import React, { useState } from 'react'

const Count: React.FC = () => {
  const [count, setCount] = useState(0)
  
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  )
}

export default Count