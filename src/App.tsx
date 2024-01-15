import './App.css'
import Greeter from './components/Greeter'
import LoginForm from './components/LoginForm'

function Header() {
  return(
    <h1>Header</h1>
  )
}


function App() {

  return (
    <>
      <Header />
      <Greeter />
      <LoginForm />
    </>
  )
}

export default App
