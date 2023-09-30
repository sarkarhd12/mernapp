import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Model from '../Model';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbarcompo() {

  const [cartView,setCartView]=useState(false)
  let data=useCart()
  const navigate=useNavigate();
        
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-1 fst-italic' href="">GoFood</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link className='active ' href="/">Home</Nav.Link>

            {(localStorage.getItem("authToken"))?
             <Nav.Link className='active ' href="/myOrder" >Myorders</Nav.Link>
             :''
            }
          </Nav>
          {(!localStorage.getItem("authToken"))?
          <Nav>
          <Nav.Link className='btn mx-1 btn-outline-danger' href="/login">login</Nav.Link>
            
            <Nav.Link className='btn mx-1 btn-outline-danger' href='/createuser'>SignUp</Nav.Link>
            </Nav>
            :
            <Nav>
            <Nav>
            <Nav.Link className='btn mx-2 btn-outline-danger' href="" onClick={()=>{setCartView(true)}}>
              Mycart{" "}
            <Badge pill bg='danger' >{data.length}</Badge>
            </Nav.Link>
            </Nav>
            {cartView?<Model onClose={()=>setCartView(false)}><Cart/></Model>:null}
             <Nav>
            <Nav.Link className='btn mx-2 btn-outline-danger' href="" onClick={handleLogout}>logout</Nav.Link>
            </Nav>
            </Nav>
            }
        </Container>
      </Navbar>
    </div>
  )
}
