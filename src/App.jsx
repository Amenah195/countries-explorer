import { useEffect, useState } from "react"
import "./Components/style.css";
import CountryCard from "./Components/CountryCard";
import Header from "./Components/Header";


function App() {

  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const [region, setRegion] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      let url = "https://restcountries.com/v3.1/all";

      if (region !== "all") {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }

      if (search.length >= 2) {
        url = `https://restcountries.com/v3.1/name/${search}`;

      }

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    };


    fetchCountries();
  }, [search, region]);




  return (

    <div>
      < p className="title">🌎Countries Explorer</p>
      <Header
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      {loading && <p>Loading countries...</p>}
      {error && (
        <div>
          <p>
            Error:{error}
          </p>
          <button onClick={() => { setSearch(""); setRegion("all"); }}>Retry</button>
        </div>
      )}

      <div className="countries-list">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

    </div>
  )
}

export default App
