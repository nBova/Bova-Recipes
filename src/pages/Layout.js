import '../CSS/Layout.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, } from 'reactstrap';

const Layout = () => {
  return (
    <div className='Layout'>
    <Navbar class="navbar navbar-light">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink to="/recipes">Recipes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blogs">Blogs</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <Outlet />
    </div>
  )
};

export default Layout;