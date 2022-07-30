import {
    ADD_CUSTOMER,
  RETRIEVE_CUSTOMERS,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  
} from "./types";
import  CustomerService from "../services/CustomerService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addCustomer = ({customerFirstName,customerLastName,customerAddress,customerMobileNumber,customerEmailId,password,role,userId,username}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await CustomerService.create({ customerFirstName,customerLastName,customerAddress,customerMobileNumber,customerEmailId,password,role,userId,username });
    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveCustomers = () => async (dispatch) => {
  try {
    const res = await CustomerService.getAll();
    dispatch({
      type: RETRIEVE_CUSTOMERS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateCustomer = (id, data) => async (dispatch) => {
  try {
    const res = await CustomerService.update(id, data);
    dispatch({
      type: UPDATE_CUSTOMER,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteCustomer = (id) => async (dispatch) => {
  try {
    await CustomerService.remove(id);
    dispatch({
      type: DELETE_CUSTOMER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};