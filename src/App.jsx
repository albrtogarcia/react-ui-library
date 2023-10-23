import Button from './components/Button/Button'
import Input from './components/Input/Input'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>UI Core Library</h1>
      <div className="card">
        <Input label="Email" type="email" />
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default App
