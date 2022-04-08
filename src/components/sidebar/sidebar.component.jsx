import './sidebar.styles.scss';

function Sidebar() { 

    return (
        <div className="fixed-sidebar">

            <div className="siderbar-icons">
                <ul>

                    <li className="sidebar-icon-arenko"><a href="#"><img src="/images/arenko-square-sm.png"/></a></li>
                    <li className="sidebar-icons-li sidebar-icon-home active"><a className="sidemenu-icon-link" href="#"><img src="images/home-icon.svg"/></a></li>
                    <li className="sidebar-icons-li sidebar-icon-documents"><a className="sidemenu-icon-link" href="#"><img src="images/invoices-icon.svg"/><span className="notification-circle">16</span></a></li>
                    <li className="sidebar-icons-li sidebar-icon-share"><a className="sidemenu-icon-link" href="#"><img src="images/network-icon.svg"/></a></li>
                    <li className="sidebar-icons-li sidebar-icon-settings"><a className="sidemenu-icon-link" href="#"><img src="images/settings-icon.svg"/></a></li>
                    <li className="sidebar-icons-li sidebar-icon-cards"><a className="sidemenu-icon-link" href="#"><img src="images/transactions-icon.svg"/></a></li>
                </ul>

                <div className="sidebar-logo"></div>

            </div>

            <div className="sidebar-menu-list">

                <ul>

                    <li className="active"><a href="#">Asset 1</a></li>
                    <li><a href="#">Carbon Intensity</a></li>
                    <li><a href="#">Carbon Stats</a></li>
                    <li><a href="#">Carbon Factors</a></li>
                    <li><a href="#">Grid Output</a></li>

                </ul>

            </div>


            </div>
    )
}

export default Sidebar;