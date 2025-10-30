import { Link } from "react-router-dom";

export interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
}

interface Props {
  countries: Country[];
}

export default function CountryList({ countries }: Props) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {countries.map((country) => (
        <li
          key={country.name.common}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 16,
            border: "1px solid #eee",
            borderRadius: 8,
            padding: 8,
          }}
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            style={{ width: 48, marginRight: 16 }}
          />
          <div style={{ flex: 1 }}>
            <div><b>{country.name.common}</b></div>
            <div>Vùng: {country.region}</div>
            <div>Dân số: {country.population.toLocaleString()}</div>
          </div>
          <Link to={`/country/${country.name.common}`}>Chi tiết</Link>
        </li>
      ))}
    </ul>
  );
}
