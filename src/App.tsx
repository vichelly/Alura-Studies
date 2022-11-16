import { useState } from 'react'
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  )
}

export default App;
