import Comments from "components/comments/Comments";
import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
