import { useState } from "react";

function StarShipSearch({ onSearch, onReset, prevSearchTerm, resultCount }) {
    const [searchTerm, setPrevSearchTerm] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchTerm);
        setPrevSearchTerm("");
    }


    return (
        <div>
            <p>Results: {resultCount} | Last search: {prevSearchTerm || "Search for a starship by name."}</p>
            <form onSubmit={handleSubmit}>
            <input type="text"
            value={searchTerm}
            onChange={(e) => setPrevSearchTerm(e.target.value)}
            placeholder="Search starships..." 
            />
            <button type="submit">Search</button>
            {prevSearchTerm && <button type="button" onClick={onReset}>Show all starships</button>}
            </form>
        </div>
    )
}

export default StarShipSearch;