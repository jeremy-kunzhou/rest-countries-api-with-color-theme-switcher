import React, { useContext } from 'react';

import ThemeContext from '../ThemeContext';

export default function Switch () {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <button 
      className='theme-switch'
      onClick={() => toggle()}
    >
      <i className={`fa ${dark? "fa-moon-o" : "fa-sun-o"}`}></i><span>{`${dark? "Dark Mode" : "Light Mode"}`}</span>
    </button>
  );
} 