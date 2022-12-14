import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Link from 'next/link';

function index({heros}) {
  return (
  <div className="container">
  <h2>SuperWoman identity Manager</h2>
   <div >
   {heros.map((hero) =>{
    return(

      <MDBCard className="my-2" style={{maxWidth: '25rem'}}>
      <MDBCardBody>
        <MDBCardTitle>{hero.superHero}</MDBCardTitle>
        <MDBCardText>
         Reveal Identity
        </MDBCardText>
        <Link href={`/${hero._id}`}><MDBBtn className="mx-2">View Hero</MDBBtn></Link>
        <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>

    )
   })}
    
   </div>
  </div>
    
  )
}

export async function getStaticProps(context) {
  const res = await axios('http://localhost:3000/api/hero')
  console.log(res.data.hero);
  const {hero} = res.data;
  return {
    props:{
      heros: hero
    }
  }


}

export default index