const { createContext, useState } = require("react");

const AppContext = createContext({
  darkMode: true,
  darkModeToggle: () => {},
});

export default AppContext;

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeToggle = () => {
    setDarkMode((prevDarkState) => {
      return !prevDarkState;
    });
  };

  return (
    <AppContext.Provider
      value={{
        darkMode: darkMode,
        darkModeToggle: darkModeToggle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
