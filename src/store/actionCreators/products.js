import { getProductsSuccess } from "../actions/products";
import ApiService from "../apiService";

export const fetchData = () => {
  return (dispatch) => {
    ApiService.fetchDataFromServer("products")
      .then((response) => {
        dispatch(getProductsSuccess(response.products))
      })
      .catch((err) => console.error(err));
  };
};
