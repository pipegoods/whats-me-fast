import { useState } from "react";
import CountryInput from "./components/CountryInput";
import Footer from "./components/Footer";
import { API_WHASTAPP_URL } from "./config";
import { COUNTRYS_PHONE, COUNTRY_CO } from "./data/countrys-phone";
import "./styles/home.css";

const App = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(COUNTRY_CO.dial_code);

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onChangeCode = (code: string) => {
    setCode(code);
  };

  return (
    <div className="section--message">
      <h1>Chatea por WhastApp</h1>
      <h5>
        Escribe mensajes de WhatsApp sin agregar el número a los contactos
      </h5>

      <div className="section--input">
        <CountryInput
          suggestions={COUNTRYS_PHONE}
          phone={phone}
          onChangePhone={onChangePhone}
          onChangeCode={onChangeCode}
        />
      </div>

      <div className="section--button">
        <a
          href={API_WHASTAPP_URL + code.slice(1) + phone}
          target="_blank"
          rel="noreferrer"
          style={{ display: phone.length === 10 ? "block" : "none" }}
        >
          Abrir Chat
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default App;
