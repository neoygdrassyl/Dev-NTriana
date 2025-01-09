import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Header() {
const [active, setActive] = useState('/#')

  return (
    <Nav   
      activeKey={active}
      variant="tabs"
      onSelect={setActive}
    >
       <Nav.Item>
        <Nav.Link href="/#"><label className='text-dark'>START</label></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#resume">RESUME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#skills">SKILLS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#works">WORKS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#contact">CONTACT</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;