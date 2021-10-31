import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <Navbar className="text-green-200 body-font">
      <Container className="Container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <img src="https://i.ibb.co/TMwY8Yc/Logo.png" alt="" />
          <span className="ml-3 text-2xl text-green-500 italic font-bold">Territory Of Taste</span>
        </Link>
        <Link className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold text-black ">
          <Link to="/home" className="mr-5 hover:text-white">Home</Link>
          <Link to="/gallery" className="mr-5 hover:text-white">Gallery</Link>
          <Link to="/" className="mr-5 hover:text-white"></Link>
          <Link to="/contact" className="mr-5 hover:text-white">Contact Us</Link>
        </Link>
        {user?.email ?
          <button className="text-black font-bold bg-green-100 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-100 rounded text-lg" onClick={logOut} >Logout</button> :
          <button className="text-black font-bold bg-green-100 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-100 rounded text-lg"><Link as={Link} to="/login">Login</Link>
          </button>
        }
        <p className="font-bold text-red-100">
          Signed as: <a href="/login">{user?.displayName}</a>
        </p>
      </Container>
    </Navbar>
  );
};

export default Header;

