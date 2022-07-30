
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import CustomerList from './components/CustomerList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddCustomerForm from './components/AddCustomerForm';
import EditCustomerForm from './components/EditCustomerForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarouselComponent from './components/BootstrapCarouselComponent'

function App() {
  
const [customers,setCustomers]=useState([]);

    
    useEffect(()=>{apiClient.get('/viewAllCustomers').then((response)=>{
      setCustomers(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

const initialFormState = {
   customerFirstName:'',
   customerLastName:'',
   customerAddress:'',
   customerMobileNumber:0,
   customerEmailId :'',

   userId:0,
   password:'',
   role:'',
   username:''
   

}
const [currentCustomer,setCurrentCustomer] 
     =useState(initialFormState);

     
async function addCustomer(customer){
  try{
  const response=await apiClient.post('/addCustomer',customer);
    setCustomers([...customers,response.data]);
    console.log(customers);
    
  }catch(err){
    console.log(err)
  }
  
}/* 
    const deleteDriver= async (id)=>{
  await apiClient.delete(`/deleteDriver/${id}`);
    setDrivers(drivers.filter((driver)=>driver.userId !== id));
  } */


  async function deleteCustomer(id){

    await apiClient.delete(`/deleteCustomer/${id}`);
  
      setCustomers(customers.filter((customer)=>customer.userId !== id));
  
    }

  
  const editCustomer=(customer)=>{

    setEditing(true);

      setCurrentCustomer
      ({customerFirstName:customer.customerFirstName,
        customerLastName:customer.customerLastName,
        customerAddress:customer.customerAddress,
        customerMobileNumber:customer.customerMobileNumber,
        customerEmailId:customer.customerEmailId,
        
        userId:customer.userId,
        password:customer.password,
        role:customer.role,
        username:customer.username
        
       })
     
  }
  
   const updateCustomer = (id,updatedCustomer)=>{
  
    setEditing(false);
    apiClient.put(`/updateCustomer/${id}`,updatedCustomer).then((response)=>
    {             
  
      console.log('customer updated');
      setCustomers(customers.map((customer)=>
    (customer.userId === id ? updatedCustomer : customer)));
    })
    
  } 
  
  
  
  
  return (
    <div>
    <div className='container'>
    <BootstrapCarouselComponent /> 
    <h1>Customer Crud app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Customer Form </h2>
          <EditCustomerForm
           setEditing={setEditing}
           currentCustomer={currentCustomer}
           updateCustomer={updateCustomer}
           />
           </div>):(
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/customers" className="navbar-brand">
          React App
        </a>
         <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllCustomers"} className="nav-link">
              Customers
            </Link> 
          </li> 



          <li className="nav-item">
            <Link to={"/addCustomer"} className="nav-link">
              Add Customer
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<CustomerList 
    customerData={customers} 
         editCustomer={editCustomer}
         deleteCustomer={deleteCustomer} />} ></Route>
          <Route exact path="addCustomer" element={<AddCustomerForm addCustomer={addCustomer}/>} />
         
         <Route path='/viewAllCustomers' element={<CustomerList 
    customerData={customers}
    editCustomer={editCustomer}
         deleteCustomer={deleteCustomer} />}>

         </Route>
         <Route path='/updateCustomer/:id' element={<EditCustomerForm /> }></Route>
        
        
         {/* <Route path='/deleteCustomer/:id' element={<deleteDriverForm /> }></Route> */}
        
        </Routes>
      </div>
    
    </BrowserRouter>
    )
}
</div></div></div></div>
)}
export default App;