import './App.css'
import { ContextProvider } from './contexts/Context'
import { Button } from './components/Button'
import { AuthCard } from './components/AuthCard'

function App() {

  return (
    <ContextProvider>
      <Button />

      <div style={{border: "1px solid gray", padding: "10px 30px"}}>
        <AuthCard />
      </div>
    </ContextProvider>
  )
}

export default App
