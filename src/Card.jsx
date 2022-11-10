import './Card.scss'
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="card" style={{backgroundColor: props.cardData.color}}>
      <p>{props.cardData.name}</p>
      <h2>{props.cardData.color}</h2>
    </div>
  )
}