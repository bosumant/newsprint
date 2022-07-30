import http from "../http-common";
const getAll = () => {
  return http.get("/viewAllCustomers");
}; 
  const get = id => {
  return http.get(`/ViewCustomer/${id}`);   
};  
const create = data => {
  return http.post("/addCustomer", data);
};
const update = (id, data) => {
  return http.put(`/updateCustomer/${id}`, data);
};
const remove = id => {
  return http.delete(`/deleteCustomer/${id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const CustomerService = {
  get,
  getAll,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default CustomerService;