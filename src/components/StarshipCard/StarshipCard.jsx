function StarshipCard ({ starship }) {
    return (
        <li>
            <h2>{starship.name}</h2>
            <p><strong>Class:</strong> {starship.starship_class} </p>
            <p><strong>Model:</strong> {starship.model} </p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer} </p>
        </li>
    )
}

export default StarshipCard;