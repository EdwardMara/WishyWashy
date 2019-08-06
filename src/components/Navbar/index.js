import React from 'react';

import Nav from 'react-bootstrap/Nav';
import "./style.css";

const Navbar = (props) => (


    <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
        
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
            <Nav.Link eventKey="link-3">{props.role}</Nav.Link>
        </Nav.Item>
    </Nav>
)

export default Navbar;

