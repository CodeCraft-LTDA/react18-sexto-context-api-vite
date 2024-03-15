import './App.css'
import { ContextProvider } from './contexts/Context'
import { Button } from './components/Button'

function App() {

  return (
    <ContextProvider>
      <Button />
    </ContextProvider>
  )
}

export default App
