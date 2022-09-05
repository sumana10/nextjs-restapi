import React, { useState } from 'react';
import {
 MDBInput,
 MDBBtn
} from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Link from 'next/link';
import Router, {useRouter} from 'next/router';


function add() {

  const [form, setForm] = useState({
    superHero: '',
    realName: ''

  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value

    })
  }

  const handleForm = async(e) =>{

    e.preventDefault();

    try{

      const res = await axios('http://localhost:3000/api/hero',{
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        data: JSON.stringify(form)
      })
      Router.push('/')

    }
    catch(error){
      console.log(error);
    }

  }
  return (
    <div className="container">
    
       <h1>Add newHero Identity</h1>
       <form onSubmit={handleForm}>
        <MDBInput 
        onChange={handleChange}
        label= "superHero"
        type = "text"
        name = "superHero"
        />
        <MDBInput 
        onChange={handleChange}
        label= "realName"
        type = "text"
        name = "realName"
        className='mt-2'
        />
        <MDBBtn className='mt-2' type="submit">ADD NEWHERO</MDBBtn>
       </form>
    </div>
  )
}

export default add