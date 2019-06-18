import React from "react";
import Immutable from "immutable";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ProductList } from "components/product-list/product-list";
import productList from "mock-data/product-list.json";

const mockStore = configureMockStore();
const store = mockStore({});
describe("Component - ProductList", () => {
  let props;

  beforeEach(() => {
    props = {
      productList: Immutable.fromJS(productList.groups)
    };
  });

  it("should render the ProductList snapshot", () => {
    const wrapper = shallow(<Provider store={ store }><ProductList { ...props } /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the correct product name and product price", () => {
    const wrapper = shallow(<ProductList { ...props } />, {
        context: { store },
        childContextTypes: { store: PropTypes.object.isRequired }
      });
    expect(wrapper.contains("Heathered Cotton Sateen Duvet Cover + Shams - Fog")).toBe(true);
    expect(wrapper.find(".product-list__product-name").length).toBe(10);
    expect(wrapper.find(".product-list__product-price").length).toBe(10);
  });
});
