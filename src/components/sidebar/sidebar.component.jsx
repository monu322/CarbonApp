import { useState } from 'react';
import { Link } from "react-router-dom";


import './sidebar.styles.scss';

function Sidebar() { 


    const [homeActive, setHomeActive] = useState(window.location.pathname==='/');
    const [carbonActive, setCarbonActive] = useState(window.location.pathname==='/carbon');

    const handleClick = ()=>{
        if(window.location.pathname==='/carbon')
        {
            setHomeActive(false);
            setCarbonActive(true);
        }
        else
        {
            setHomeActive(true);
            setCarbonActive(false);
        }
        

    }

    console.log('location', window.location.pathname);

    return (
        <div className="fixed-sidebar">

            <div className="siderbar-icons">
                <ul>

                    <li className="sidebar-icon-arenko"><Link to="/"><img alt="arenko-logo" src="/images/arenko-square-sm.png"/></Link></li>
                    <li className="sidebar-icons-li sidebar-icon-home active"><Link className="sidemenu-icon-link" to="/"><img alt="tab-icon" src="images/home-icon.svg"/></Link></li>
                    <li className="sidebar-icons-li sidebar-icon-documents"><Link className="sidemenu-icon-link" to="/"><img alt="tab-icon" src="images/invoices-icon.svg"/><span className="notification-circle">16</span></Link></li>
                    <li className="sidebar-icons-li sidebar-icon-share"><Link className="sidemenu-icon-link" to="/"><img alt="tab-icon" src="images/network-icon.svg"/></Link></li>
                    <li className="sidebar-icons-li sidebar-icon-settings"><Link className="sidemenu-icon-link" to="/"><img alt="tab-icon" src="images/settings-icon.svg"/></Link></li>
                    <li className="sidebar-icons-li sidebar-icon-cards"><Link className="sidemenu-icon-link" to="/"><img alt="tab-icon" src="images/transactions-icon.svg"/></Link></li>
                </ul>

                <div className="sidebar-logo"></div>

            </div>

            <div className="sidebar-menu-list">

                <ul>

                    <li onClick={handleClick} className={homeActive?'active':null}><Link to="/">Asset 1</Link></li>
                    <li onClick={handleClick} className={carbonActive?'active':null}><Link to="/carbon">Carbon Intensity</Link></li>
                    <li><Link to="/">Carbon Stats</Link></li>
                    <li><Link to="/">Carbon Factors</Link></li>
                    <li><Link to="/">Grid Output</Link></li>

                </ul>

            </div>


            </div>
    )
}

export default Sidebar;