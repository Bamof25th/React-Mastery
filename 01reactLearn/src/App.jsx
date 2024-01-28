import React, { useState } from 'react'

const App = () => {
  let [a, b] = useState(0)
  return (
    <div className=' w-full h-screen'>
    <div className="w-[25vw] h-[25vh] text-center  ml-[25vw] border">
    <h1 className=" text-white">{a}</h1>
      <button className="bg-green-300 rounded-md mt-5 p-3 text-sm " onClick={() => b(a++)}>on click</button>
    </div>
    </div>
  )
}

export default App