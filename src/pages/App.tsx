import { useState } from 'react'
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  )
}

export default App;
