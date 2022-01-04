import { useContext } from "react";
import AppContext from "store/context";

const AllQuotes = () => {
  const { quotes } = useContext(AppContext);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((q) => (
          <li key={q.text}>
            <div>
              <h2>{q.text}</h2>
              <h6>{q.author}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllQuotes;
