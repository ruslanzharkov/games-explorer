import React from 'react';
import { FaGamepad } from "react-icons/fa";

import './Header.css';

export const Header = () => {
  return (
    <div className="Header">
      <div>
        <FaGamepad size={35}/>
        <div>
          Games explorer
        </div>
      </div>
    </div>
  )
}
