import { UIactions } from "./UIslice";
import { Cartactions } from "./CartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-practice-5e403-default-rtdb.firebaseio.com/redux.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart Data failed");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cart = await fetchData();

      if (!cart.Items) {
        cart.Items = [];
        cart.totalQuantity = 0;
      }
      dispatch(
        Cartactions.replaceCart({
          Items: cart.Items || [],
          totalQuantity: cart.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        UIactions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIactions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-practice-5e403-default-rtdb.firebaseio.com/redux.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        UIactions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        UIactions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
