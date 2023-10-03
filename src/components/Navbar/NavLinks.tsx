
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  onClick?: () => void;
  
}

const NavLinks: React.FC<NavLinkProps> = ({ name, onClick}) => {
  return (
    <Link
      to={`/${name}`}
      className="capitalize duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"
      {...onClick}
    >
      <span className="md:text-sm">{name}</span>
    </Link>
  );
};

export default NavLinks;
