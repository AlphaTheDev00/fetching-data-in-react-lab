import { useState, useEffect } from 'react'
import { fetchStarships } from './services/starshipService.js';
import StarshipSearch from "./components/StarshipSearch/StarShipSearch.jsx";
import StarshipList from "./components/StarshipList/StarshipList.jsx"
import './App.css'


function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");


// Fetch starships when the component loads
useEffect(() => {
  async function getData() {
    const starships = await fetchStarships();
    setStarshipsData(starships);
    setDisplayedStarships(starships);
  }
  getData();
}, []);

// function to filter starships by name
function handleSearch(searchTerm) {
  const filtered = starshipsData.filter(starship =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setDisplayedStarships(filtered);
  setPrevSearchTerm(searchTerm)
}

// function to reset the search
function resetSearch() {
  setDisplayedStarships(starshipsData);
  setPrevSearchTerm("");
}

return (
  <div>
      <h1>🚀 Star Wars Starships</h1>
      <StarshipSearch 
          onSearch={handleSearch} 
          onReset={resetSearch} 
          prevSearchTerm={prevSearchTerm} 
          resultCount={displayedStarships.length} 
      />
      <StarshipList starships={displayedStarships} />
  </div>
);

}



export default App

