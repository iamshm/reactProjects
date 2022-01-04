import { createContext, useState, useEffect } from "react";

const AppContext = createContext({
  quotes: [],
  darkMode: true,
  darkModeToggle: () => {},
});

export default AppContext;

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const darkModeToggle = () => {
    setDarkMode((prevDarkState) => {
      return !prevDarkState;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-http-bd594-default-rtdb.firebaseio.com/quoteDB.json"
      );
      const resData = await res.json();
      return resData;
    };
    fetchData().then((data) => {
      //fetch data Mode
      if (data.darkState) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
      //fetch quotes
      const quoteList = [];
      for (const i in data.quotes) {
        quoteList.push(data.quotes[i]);
      }
      setQuotes(quoteList);
    });
  }, []);

  useEffect(() => {
    const sendData = async () => {
      const res = await fetch(
        "https://react-http-bd594-default-rtdb.firebaseio.com/quoteDB.json",
        {
          method: "PUT",
          body: JSON.stringify({
            quotes: quotes,
            darkState: darkMode ? 1 : 0,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Error");
      }
    };
    sendData().catch((err) => console.log(err));
  }, [quotes, darkMode]);

  return (
    <AppContext.Provider
      value={{
        quotes,
        darkMode: darkMode,
        darkModeToggle: darkModeToggle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
