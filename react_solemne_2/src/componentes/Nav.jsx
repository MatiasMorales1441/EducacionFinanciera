import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';


function Nav(props) {

    return(
    <header>
    <a href="/"><img src={logo} width="150" className="fijo" /></a>
    <nav>
        <ul>
            {
                props.links.map(
                    (link,i) => <li key={i}>
                    
                    <Link to={link.href}> {link.label}</Link>

                    </li>

                    )
            }
            
        </ul>
    </nav>
</header>
    )
}

export default Nav;