import Header from "components/Layout/Header";
import Meals from "components/Meals/Meals";
import React, { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
