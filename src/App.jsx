import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/TodoList'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mt-10 flex min-h-screen w-full flex-col justify-start bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]">
    <div class="container mx-auto p-4'>

  <TodoList/>
    </div>
    </>
  )
}

export default App
