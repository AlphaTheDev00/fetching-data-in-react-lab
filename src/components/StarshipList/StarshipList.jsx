import StarshipCard from "../StarshipCard/StarshipCard";

function StarshipList({ starships }) {
    return (
        <section>
            <ul>
                {starships.map((ship, index) => (
                    <StarshipCard key={index} starship={ship} />
                ))}
            </ul>
        </section>
    )
}


export default StarshipList;