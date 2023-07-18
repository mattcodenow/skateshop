import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>SkateShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="top-navbar-nav" />
        <Navbar.Collapse id="top-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/catalog">
              <Nav.Link>Catalog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav
