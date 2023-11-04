type Cardparams = {
    number : string}

function Card(props: Cardparams) {
    return (
        <button className="card" >{props.number}</button>
    )
}

export default Card;