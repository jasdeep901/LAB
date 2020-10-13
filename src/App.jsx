 import React from 'react';
 import Greeting from './components/Greeting/';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import  { useState } from 'react';
  
 
 
 
 const App = () => {

     const [name, setName] = useState([]);
     return (

         <>
         <input

             onChange={({target: { value }}) => setName(value)}
             
             placeholder={"Enter your name"}
         />
         <Greeting name= {name}/></>
     );
 };
 
 export default App;
 
 


