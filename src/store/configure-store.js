import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import createLogger from "redux-logger";
import Immutable from "immutable";

import history from "./history";
import initialState from "./initial-state";
import rootReducer from "./root-reducer";

const __DEVELOPMENT__ = process.env.NODE_ENV === "development";

const middleware = [ thunk, routerMiddleware(history) ];

let enhancers;

if (__DEVELOPMENT__) {
  middleware.push(createLogger({
    collapsed: true,
    stateTransformer (state) {
      if (Immutable.Map.isMap(state) || Immutable.List.isList(state)) {
        return state.toJS();
      }
      return state;
    }
  }));

  if (window.devToolsExtension) {
    enhancers = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || window.devToolsExtension()
    );
  } else {
    enhancers = applyMiddleware(...middleware);
  }
} else {
  enhancers = applyMiddleware(...middleware);
}

/**
 * @function
 * Create the store for redux
 * @returns {object}
 */
export default function () {
  return createStore(
    rootReducer,
    initialState,
    enhancers
  );
}
