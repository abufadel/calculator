type Cardparams = {
    number : string}

function Card(props: Cardparams) {
    return (
        <div className="card">
            <button>{props.number}</button>
        </div>
    )
}

export default Card;