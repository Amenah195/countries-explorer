import "./style.css";

export default function Header({ search, setSearch, region, setRegion }) {
    return (
        <div className="header">
            <input
                className="search-input"
                type="text"
                placeholder="Search Country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select

                className="region-select"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
            >
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}