import { useState } from 'react'
import './App.css'
import billionaireListData from '../../../billionaireListData'
import Billionaires from '../Billionaires/Billionaires'
import Header from '../Header/Header'

function App() {
  
  const [billionaires, setBillionaires] = useState(billionaireListData.ranking)

  return (
    <main className='app'>
      <Header />
      <Billionaires billionaires={billionaires} />
    </main>
  )
}

export default App
