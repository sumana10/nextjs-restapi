import React from 'react';
import Link from 'next/link';
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';


function Navbar() {
  return (
    <nav className='navbar container-fluid'>
      <Link href="/">
        <a className='navbar-brand'>SuperWoman</a>  
      </Link>
      <Link href="/add">
        <MDBBtn>Pheonix</MDBBtn> 
      </Link>
     
    </nav>
  )
}

export default Navbar