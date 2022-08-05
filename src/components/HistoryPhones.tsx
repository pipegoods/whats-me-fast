import { useContext } from "react";
import { API_WHASTAPP_URL } from "../config";
import { HistoryContext } from "../context/history.context";
import "../styles/historyPhones.css";

const HistoryPhones = () => {
  const { history } = useContext(HistoryContext);
  return (
    <div>
      <h5>Historial de chats</h5>

      <ul className="historyPhone--lista">
        {history.slice(0, 5).map((item, index) => (
          <li key={index} className="historyPhone--item">
            <a href={API_WHASTAPP_URL + item} target="_blank" rel="noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPhones;
