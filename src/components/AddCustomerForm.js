import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../actions/customers';
import CustomerService from '../services/CustomerService';

export default function AddCustomerForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
  userId:0,
  user:{
   password:'',
   role:'',
  userId:0,
  username:''},


   customerFirstName:'',
   customerLastName:'',
   customerAddress:'',
   customerMobileNumber:0,
   customerEmailId :'',
  
   //password:'',
   // role:'',
   // userId:0,
   // username:'' 
}
const initialUserFormState={role:'',
userId:0,
password:'',
username:''}

const [user,setUser] =useState(initialUserFormState);
const handleUserIdChange=(event)=>{
   const{name,value}=event.target;
   setUser({...user,[name]:value});
   setCustomer({...customer,...user});
}

 
const [customer,setCustomer]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setCustomer({...customer,[name]:value});
}
useEffect(()=>{
   setCustomer({...customer,user})
},[user])
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}
const handleNameChange = (event)=>{
   setName(event.target.value)
}
const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}
const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}
*/
const submitHandler=(event)=>{event.preventDefault();

 console.log(JSON.stringify(customer)+'from addcustomerform')
//props.addDriver(driver);
dispatch(addCustomer(customer));
setCustomer(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

   <label>customerFirstName</label>
<input 
type='text'
name='customerFirstName'
value={customer.customerFirstName}
onChange={handleInputChange}/><br/>


<label>customerLastName</label>
<input 
type='text'
name='customerLastName'
value={customer.customerLastName}
onChange={handleInputChange}/><br/>

<label>customerAddress</label>
<input 
type='text'
name='customerAddress'
value={customer.customerAddress}
onChange={handleInputChange}/><br/>

<label>customerMobileNumber</label>
<input 
type='text'
name='customerMobileNumber'
value={customer.customerMobileNumber}
onChange={handleInputChange}/><br/>

<label>customerEmailId</label>
<input 
type='text'
name='customerEmailId'
value={customer.customerEmailId}
onChange={handleInputChange}/><br/>



<label>userId</label>
<input 
type='number'
name='userId'
value={customer.userId}
onChange={handleUserIdChange}/>

<label>password</label>
<input 
type='password'
name='password'
value={customer.password}
onChange={handleUserIdChange}/>

<label>role</label>
<input 
type='text'
name='role'
value={customer.role}
onChange={handleUserIdChange}/>


<label>username</label>
<input 
type='text'
name='username'
value={customer.username}
onChange={handleUserIdChange}/><br/>


<button>Add New Customer</button>

</form>


</>
)


}