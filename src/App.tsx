import { useState } from "react";
import { COUNTRYS_PHONE } from "./data/countrys-phone";
import "./styles/home.css";

const App = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="section--message">
      <h1>Chatea por WhastApp</h1>
      <h5>Sin agregar contactos</h5>

      <div className="section--input">
        <select name="" id="">
          <option value="">Selecciona un país</option>
          {COUNTRYS_PHONE.map((country) => (
            <option key={country.code} value={country.dial_code}>
              {`${country.emoji} - ${country.name} (${country.dial_code})`}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Número de teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <a>Click me!</a>
    </div>
  );
};

export default App;
