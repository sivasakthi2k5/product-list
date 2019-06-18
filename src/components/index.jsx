import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import configureStore from "store/configure-store";
import history from "store/history";
import getRoutes from "components/routes";

const store = configureStore();

const enhancedHistory = syncHistoryWithStore(history, store, {
  selectLocationState (state) {
    return state.get("routing").toJS();
  }
});

const __DEVELOPMENT__ = process.env.NODE_ENV === "development";

if (__DEVELOPMENT__) {
  window.getState = () => store.getState().toJS();
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ enhancedHistory }>
      { getRoutes(store) }
    </Router>
  </Provider>
  , document.getElementById("product-list-container"));
