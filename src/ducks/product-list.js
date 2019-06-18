import Immutable from "immutable";

export const getProductList = state => state.getIn(["productListInit", "groups"], Immutable.List);