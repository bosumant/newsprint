import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditCustomerForm(props){
     const [customer,setCustomer] =useState(props.currentCustomer)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setCustomer({...customer,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateCustomer(customer.userId,customer);
    }
     return (
        <form onSubmit={submitHandler}>
         

         

<label>Id</label>
<h1>{props.currentCustomer.userId}</h1>



<label>customerFirstName</label>
<input 
type='text'
name='customerFirstName'
value={customer.customerFirstName}
onChange={handleInputChange}/>

<label>customerLastName</label>
<input 
type='text'
name='customerLastName'
value={customer.customerLastName}
onChange={handleInputChange}/>

<label>customerAddress</label>
<input 
type='text'
name='customerAddress'
value={customer.customerAddress}
onChange={handleInputChange}/>


<label>customerMobileNumber</label>
<input 
type='text'
name='customerMobileNumber'
value={customer.customerMobileNumber}
onChange={handleInputChange}/>

<label>customerEmailId</label>
<input 
type='text'
name='customerEmailId'
value={customer.customerEmailId}
onChange={handleInputChange}/>


<label>password</label>
<input 
type='text'
name='password'
value={customer.password}
onChange={handleInputChange}/>

<label>role</label>
<input 
type='text'
name='role'
value={customer.role}
onChange={handleInputChange}/>

<label>username</label>
<input 
type='text'
name='username'
value={customer.username}
onChange={handleInputChange}/>



 <button>Update Customer</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button> 

</form>
   )
}