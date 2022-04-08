import './footer.styles.scss';

function Footer() { 

    return (
        <div className="content-footer">

            &copy; {new Date().getFullYear()} Copyright <a rel="noreferrer" target="_blank" href="https://arenko.group/"> Arenko.group</a>
            
        </div>
    )
}

export default Footer;