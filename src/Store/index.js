import { configureStore } from "@reduxjs/toolkit";

import UIslice from "./UIslice";
import CartSlice from "./CartSlice";

const store = configureStore({ reducer: { UI: UIslice, Cart: CartSlice } });

export default store;
