import React, { useEffect } from "react";
import Cart from "./Component/Cart/Cart";
import Layout from "./Component/Layout/Layout";
import Products from "./Component/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./Store/cart-action";
import Notification from "./Component/UI/Notification";

let isInitial = true;

const App = () => {
  const cart = useSelector((state) => state.UI.visible);
  const notification = useSelector((state) => state.UI.notification);
  const item = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (item.change) {
      dispatch(sendCartData(item));
    }
  }, [item, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
};

export default App;
