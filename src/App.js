import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchCartData } from "store/cart-slice";
import { uiActions } from "store/ui-slice";
import Notification from "components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  //for fetching Data
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  //for Sending data
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending.. ",
          message: "Sending Cart Data",
        })
      );

      const response = await fetch(
        "https://react-http-bd594-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success.. ",
          message: "Sent Cart Data successfully",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      sendCartData().catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error! ",
            message: "Sending Cart Data failed",
          })
        );
      });
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
