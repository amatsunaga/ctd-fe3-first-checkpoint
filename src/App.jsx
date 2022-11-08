import { useState } from 'react'
import { Card } from './Card'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function validateName(name) {
  const withoutSpaces = name.trim()

  if (withoutSpaces.length > 3) return true
  else return false
}

function validateColor(color) {
  if (color.length !== 7 || color.charAt(0) !== '#') return false
  else return true
}

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [colorArray, setColorArray] = useState([])
  const [formularioErro, setFormularioErro] = useState(false)

  // function addNewColor() {setColorArray([...colorArray, color])}

  function validateValues(event) {
    event.preventDefault()

    const newColor = {
      name: name,
      color: color
    }

    if (validateName(name) && validateColor(color)) {
      setFormularioErro(false)
      setColorArray([...colorArray, color])
      setName('')
      setColor('')
    } else {
      setFormularioErro(true)
    }
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form className={formularioErro ? 'form-error' : ''} onSubmit={e => validateValues(e, name, color)}>
        {/* Comece a desenvolver o seu Código por aqui :) */}
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor="color">Cor:</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={event => setColor(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {formularioErro ? <span>O seu formulário contem erros</span> : null}

      <section className="products">
        {colorArray.map(color => {
          return <p>lorem30</p>
          // <Card cardData={color} />          
        })}
      </section>
    </div>
  )
}

export default App
