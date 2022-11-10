import { useState } from 'react'
import { Card } from './Card'
import './App.scss'

function validateName(name) {
  const withoutSpaces = name.trim()

  if (withoutSpaces.length >= 3) return true
  else return false
}

function validateColor(color) {
  if ((color.charAt(0) === "#") && (color.length >= 6) && (/\d/.test(color))) return true
  else return false
}

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [colorArray, setColorArray] = useState([])
  const [formError, setFormError] = useState(false)

  function addNewColor(event) {
    event.preventDefault()

    const newColor = {
      name: name,
      color: color
    }

    if (validateName(name) && validateColor(color)) {
      setFormError(false)
      setColorArray([...colorArray, newColor])
      setName('')
      setColor('')
    } 
    else {
      setFormError(true)
    }
  }

  return (
    <div className="App">
      <section className={`add-color-section ${formError ? 'form-error' : ''}`}>
        <form onSubmit={e => addNewColor(e)}>
          <h2 className="section-title">Adicionar nova cor</h2>
          <div className="inputs">
            <div className="name-input">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            
            <div className="color-input">
              <label htmlFor="color">Cor</label>
              <input
                id="color"
                type="text"
                value={color}
                placeholder="Insira sua cor no formato Hexadecimal"
                onChange={event => setColor(event.target.value)}
                />
            </div>
          </div>

          <div className="add-button">
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </section>

      {formError && <span>Por favor, verifique os dados inseridos no formulário</span>}

      <section className="cards-section">
        <h2 className="section-title">Cores favoritas</h2>

        <div className="cards">
          {colorArray.map(color => {
            return <Card cardData={color} />          
          })}
        </div>
      </section>
    </div>
  )
}

export default App
