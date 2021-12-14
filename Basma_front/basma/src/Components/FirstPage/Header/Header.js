import React ,{useState}from 'react';
import './Header.css'


function Header(props) {

    const [showLinks,setShowLinks]=useState(false);
    return (
            <nav className='nav'>
                <ul className='ul' id={showLinks ? "hidden" : ""}>
                    <li className='li arrow' >
                        Home
                    </li>
                    <li className='li'>
                        Feature
                    </li>
                    <li className='li arrow'>
                        Pages
                    </li>
                    <li className='li'>
                        Screenshots
                    </li>
                    <li className='li price'>
                        Pricing
                    </li>
                    <li className='li'>
                        Contact
                    </li>
                </ul>
                {showLinks ? "" : <i className="fas fa-bars show" onClick={() => setShowLinks(!showLinks)}/>}
                {showLinks ? <i className="fas fa-window-close closing" onClick={()=>setShowLinks(!showLinks)}/>: ""}
            </nav>
    );
}

export default Header;