import Layout from "components/layout/Layout";
import AllQuotes from "pages/AllQuotes";
import NewQuote from "pages/NewQuote";
import QuoteDetail from "pages/QuoteDetail";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppContext from "store/context";

export default function App() {
  const { darkMode } = useContext(AppContext);

  const mode = darkMode ? "dark" : "light";
  return (
    <div className={`${mode} bg`}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
