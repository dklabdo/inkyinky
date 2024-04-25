import { useState } from 'react'

function App() {
    const [clicked,setclicked] = useState(false)
    
  return (
    <>
      <div className='text-red-600 bg-black card' >
        test sofiane
      </div>
      <button>click me</button>
      <button>sofiane</button>
    </>
  )
}

export default App
