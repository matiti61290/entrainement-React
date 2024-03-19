import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'


let Header = () => {
    return(
    <div>
        <Navbar variant='dark' bg='info' expand='sm'>
            <Container fluid>
                <Navbar.Brand>
                    <Link to='/'>Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-dark-example' />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown id='nav-dropdown-dark-example' title='Dropdown' menuVariant='dark'>
                            <NavDropdown.Item >
                                <Link to="/magma">Magmatique</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >Metamorphique</NavDropdown.Item>
                            <NavDropdown.Item >Sedim</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default Header