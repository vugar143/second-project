import React from 'react'
import './Navbar.css'
import {useGlobalContext} from "../../Context"

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;
      openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
      if (!e.target.classList.contains('link-btn')) {
        closeSubmenu();
      }
    };
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
        <div className="nav-header">
  <img src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="graphicRiver" className='logo'/>
<button className='btn toggle-btn' onClick={openSidebar}><i className="fa-solid fa-bars"></i></button>
</div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;