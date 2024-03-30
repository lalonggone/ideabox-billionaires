import "./Billionaires.css";
import Card from "../Card/Card";

function Billionaires({ billionaires }) {

  const billionaireCards = billionaires.map((billionaire) => {
    console.log(billionaire);
    return (
      <Card
        rank={billionaire.rank}
        name={billionaire.name}
        age={billionaire.age}
        country={billionaire.country}
        currentWorth={billionaire.current_worth}
        image={billionaire.image}
        id={billionaire.id}
        key={billionaire.id}
      />
      )
  })
  

  return (
    <section className="billionaires-container">
      {billionaireCards}
    </section>
  )
}

export default Billionaires
