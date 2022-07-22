import { Header } from './components/Header'
import { Main } from './components/Main'
import { Sidenav } from './components/Sidenav'
import './styles/global.css'
function App() {
  return (
    <div className="estrutura">
      <Header />
      <Sidenav />
      <Main />
    </div>
  )
}

export default App
