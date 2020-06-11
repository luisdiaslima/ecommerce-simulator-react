import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './style';

export default function Header() {
  return (
    <Nav>
      <a>
        <FaHome size={24} />
      </a>
      <a>
        <FaUserAlt size={24} />
      </a>
      <a>
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
