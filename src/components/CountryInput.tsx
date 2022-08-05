import { ChangeEvent, useState } from "react";
import { CountryFlag } from "../types/CountryFlag.type";
import "../styles/CountryInput.css";
import { COUNTRY_CO } from "../data/countrys-phone";

type Props = {
  suggestions: CountryFlag[];
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCode: (code: string) => void;
  phone: string;
};

const CountryInput = ({
  suggestions,
  onChangePhone,
  onChangeCode,
  phone,
}: Props) => {
  const [country, setCountry] = useState<CountryFlag>(COUNTRY_CO);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);

  const onChageCountry = (country: CountryFlag) => {
    setCountry(country);
    onChangeCode(country.dial_code);
  };

  return (
    <div className={`country--input ${focus ? "country--input-focus" : ""}`}>
      <div
        className={`country--dropdown ${
          active ? "country--dropdown-active" : ""
        }`}
        onClick={() => setActive(!active)}
      >
        <div className="country--dropdown-selected">
          <img src={country.image} alt={country.name} />
          <svg
            data-baseweb="icon"
            viewBox="0 0 24 24"
            className="icon--arrow-down"
          >
            <path d="m12.707 15.293 4.44-4.44a.5.5 0 0 0-.354-.853H7.207a.5.5 0 0 0-.353.854l4.439 4.439a1 1 0 0 0 1.414 0Z" />
          </svg>
        </div>
        <div className="country--dropdown-content">
          {suggestions.map((country) => (
            <div
              key={country.code}
              className="country--dropdown-item"
              onClick={() => onChageCountry(country)}
            >
              <div className="country--dropdown-item-div">
                <img src={country.image} alt={country.name} />
                <span>{country.name}</span>
              </div>
              <span>{country.dial_code}</span>
            </div>
          ))}
        </div>
      </div>
      <span>{country.dial_code}</span>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        type="tel"
        onChange={onChangePhone}
        value={phone}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Número de WhatsApp"
      />
    </div>
  );
};

export default CountryInput;
