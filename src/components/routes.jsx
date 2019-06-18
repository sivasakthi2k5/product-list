import { Route } from "react-router";
import ProductList from "components/product-list/product-list";

export default () => {
  return (
    <Route path="/" component={ ProductList }></Route>
  );
};
