//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div>
      <p>{props.cardData.color}</p>
    </div>
  )
}