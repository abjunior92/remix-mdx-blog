import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="not-prose flex items-center gap-4 text-white">
      <button
        className="rounded bg-sky-600 px-2 py-1"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Counter
