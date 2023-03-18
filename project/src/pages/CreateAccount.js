import './style/home.css';
import React from "react";
import { useState} from "react";
import Axios from 'axios';
function CreateAccount() {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [Password, setPassword] = useState("");
const [promo, setPromo] = useState(false);

const submit = () => {
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (firstName == "" || email == "" || phone == "" || Password == "" || lastName == "") {
   alert("Please enter all required fields");
}

else if ( !re.test(email) ) {
        alert("Please enter a valid email address");
     
}
else {
       
Axios.post('http://localhost:3001', {
   
   firstName: firstName, lastName: lastName, email: email, phone: phone, Password: Password});
};
}

return (

<div className="input">
   <p className = "req">*This field is required</p>
<label>First Name</label>
<input type="text" required onChange={(event) => {setFirstName(event.target.value)}} />
<p className = "req">*This field is required</p>
<label>Last Name</label>
<input type="text" required onChange={(event) => {setLastName(event.target.value)}} />
<p className = "req">*This field is required</p>
<label>email</label>
<input type="text" onChange={(event) => {setEmail(event.target.value)}} required/>
<p className = "req">*This field is required</p>
<label>phone</label>
<input type="text" onChange={(event) => {setPhone(event.target.value)}} required/>
<p className = "reqPass">*This field is required</p>
<label>Password</label>
<input type="Password" onChange={(event) => {setPassword(event.target.value)}} required/>
<div className='Checkbox'>
<label for="promo">Sign up for Promotions?</label>
<input type="checkbox" id="promo" name="promo" onChange={(event) => {setPromo(event.target.value)}}/>
</div>
<button className = "buttonReprise" onClick={submit} >Submit</button>
<p>Don't have a payment information added?
</p>
<a href={'./Addpay'}>Add Payment</a> 

</div>
 
);








}
export default CreateAccount;