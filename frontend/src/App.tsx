import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageComp from './image-comp/ImageComp'
import ImageList from './image-comp/ImageList'

function App() {
  const [smComp,setSmComp] = useState(true);
  return (<>
  <button className='m-4 p-4 top-1 bg-slate-400 hover:blur-2' onClick={()=>setSmComp(smComp=>!smComp)}>Toggle</button>
  {smComp?<ImageComp/>:<ImageList />}
  </>
  )
}

export default App
