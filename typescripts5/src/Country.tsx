import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "./CountryList";

export default function CountryDetail() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    setError("");
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        setCountry(res.data[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Không tìm thấy quốc gia!");
        setLoading(false);
      });
  }, [name]);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!country) return null;

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 24 }}>
      <h2>Chi tiết quốc gia</h2>
      <img src={country.flags.png} alt={country.name.common} style={{ width: 80 }} />
      <div><b>{country.name.common}</b></div>
      <div>Vùng: {country.region}</div>
      <div>Dân số: {country.population.toLocaleString()}</div>

    </div>
  );
}
