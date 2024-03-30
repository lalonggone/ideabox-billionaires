import './Card.css'

function Card( {rank, name, age, country, currentWorth, image, id}) {
    return (
        <div className='card'>
            <h1>{name}</h1>
            <p className='detail'>Rank: {rank}</p>
            <p className='detail'>Country: {country}</p>
            <p className='detail'>Current Worth: {currentWorth} B</p>
            <p className='detail'>Age: {age}</p>
            <img src={image} 
                alt={`Portrait of ${name}`}
                className='portrait'>
            </img>
        </div>
    )
}

export default Card