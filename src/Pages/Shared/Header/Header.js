import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserSecret } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant='dark'>
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/'>All News</Link></Nav.Link>
                    <NavDropdown title={ user?.uid ? <Image style={{height: '30px'}}roundedCircle src={user.photoURL}></Image> : <FaUserSecret className='text-warning'/>}>
                        
                        {
                            user?.uid ? 
                            <>
                                <NavDropdown.Item>Welcome {user?.displayName}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogOut}><Link to='/logout'></Link>Logout
                                </NavDropdown.Item>
                            </>
                             :
                            <>
                                <NavDropdown.Item><Link to='/login'>Login</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item><Link to='/Register'>Register</Link>
                                </NavDropdown.Item>
                            </>
                        }
                    </NavDropdown>
                </Nav>
                <div className='d-lg-none text-light'>
                    <LeftNav className="category-link"></LeftNav>
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;